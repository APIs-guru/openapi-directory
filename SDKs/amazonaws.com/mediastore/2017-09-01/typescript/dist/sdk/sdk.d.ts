import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://mediastore.{region}.amazonaws.com", "https://mediastore.{region}.amazonaws.com", "http://mediastore.{region}.amazonaws.com.cn", "https://mediastore.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createContainer - Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
    **/
    createContainer(req: operations.CreateContainerRequest, config?: AxiosRequestConfig): Promise<operations.CreateContainerResponse>;
    /**
     * deleteContainer - Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers.
    **/
    deleteContainer(req: operations.DeleteContainerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainerResponse>;
    /**
     * deleteContainerPolicy - Deletes the access policy that is associated with the specified container.
    **/
    deleteContainerPolicy(req: operations.DeleteContainerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainerPolicyResponse>;
    /**
     * deleteCorsPolicy - <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
    **/
    deleteCorsPolicy(req: operations.DeleteCorsPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCorsPolicyResponse>;
    /**
     * deleteLifecyclePolicy - Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
    **/
    deleteLifecyclePolicy(req: operations.DeleteLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLifecyclePolicyResponse>;
    /**
     * deleteMetricPolicy - Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
    **/
    deleteMetricPolicy(req: operations.DeleteMetricPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMetricPolicyResponse>;
    /**
     * describeContainer - Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.
    **/
    describeContainer(req: operations.DescribeContainerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeContainerResponse>;
    /**
     * getContainerPolicy - Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.
    **/
    getContainerPolicy(req: operations.GetContainerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerPolicyResponse>;
    /**
     * getCorsPolicy - <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
    **/
    getCorsPolicy(req: operations.GetCorsPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetCorsPolicyResponse>;
    /**
     * getLifecyclePolicy - Retrieves the object lifecycle policy that is assigned to a container.
    **/
    getLifecyclePolicy(req: operations.GetLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetLifecyclePolicyResponse>;
    /**
     * getMetricPolicy - Returns the metric policy for the specified container.
    **/
    getMetricPolicy(req: operations.GetMetricPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetMetricPolicyResponse>;
    /**
     * listContainers - <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
    **/
    listContainers(req: operations.ListContainersRequest, config?: AxiosRequestConfig): Promise<operations.ListContainersResponse>;
    /**
     * listTagsForResource - Returns a list of the tags assigned to the specified container.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putContainerPolicy - <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
    **/
    putContainerPolicy(req: operations.PutContainerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutContainerPolicyResponse>;
    /**
     * putCorsPolicy - <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
    **/
    putCorsPolicy(req: operations.PutCorsPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutCorsPolicyResponse>;
    /**
     * putLifecyclePolicy - <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
    **/
    putLifecyclePolicy(req: operations.PutLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutLifecyclePolicyResponse>;
    /**
     * putMetricPolicy - The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
    **/
    putMetricPolicy(req: operations.PutMetricPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutMetricPolicyResponse>;
    /**
     * startAccessLogging - Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
    **/
    startAccessLogging(req: operations.StartAccessLoggingRequest, config?: AxiosRequestConfig): Promise<operations.StartAccessLoggingResponse>;
    /**
     * stopAccessLogging - Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
    **/
    stopAccessLogging(req: operations.StopAccessLoggingRequest, config?: AxiosRequestConfig): Promise<operations.StopAccessLoggingResponse>;
    /**
     * tagResource - Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from the specified container. You can specify one or more tags to remove.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};

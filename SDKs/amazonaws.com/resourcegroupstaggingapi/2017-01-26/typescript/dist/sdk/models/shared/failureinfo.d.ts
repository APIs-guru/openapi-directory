import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * <p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the AWS service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other AWS services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn't receive a response from another AWS service. It can also mean the the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to calling tagging operations in the AWS service that contains the resource. For example, to use the Resource Groups Tagging API to tag a CloudWatch alarm resource, you need permission to call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other AWS services, see the documentation for that service. </p>
**/
export declare class FailureInfo extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    statusCode?: number;
}

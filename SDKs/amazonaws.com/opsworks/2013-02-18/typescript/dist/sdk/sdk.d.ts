import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://opsworks.{region}.amazonaws.com", "https://opsworks.{region}.amazonaws.com", "http://opsworks.{region}.amazonaws.com.cn", "https://opsworks.{region}.amazonaws.com.cn"];
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
     * assignInstance - <p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    assignInstance(req: operations.AssignInstanceRequest, config?: AxiosRequestConfig): Promise<operations.AssignInstanceResponse>;
    /**
     * assignVolume - <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    assignVolume(req: operations.AssignVolumeRequest, config?: AxiosRequestConfig): Promise<operations.AssignVolumeResponse>;
    /**
     * associateElasticIp - <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    associateElasticIp(req: operations.AssociateElasticIpRequest, config?: AxiosRequestConfig): Promise<operations.AssociateElasticIpResponse>;
    /**
     * attachElasticLoadBalancer - <p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    attachElasticLoadBalancer(req: operations.AttachElasticLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.AttachElasticLoadBalancerResponse>;
    /**
     * cloneStack - <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    cloneStack(req: operations.CloneStackRequest, config?: AxiosRequestConfig): Promise<operations.CloneStackResponse>;
    /**
     * createApp - <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     * createDeployment - <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * createInstance - <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    createInstance(req: operations.CreateInstanceRequest, config?: AxiosRequestConfig): Promise<operations.CreateInstanceResponse>;
    /**
     * createLayer - <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    createLayer(req: operations.CreateLayerRequest, config?: AxiosRequestConfig): Promise<operations.CreateLayerResponse>;
    /**
     * createStack - <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    createStack(req: operations.CreateStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateStackResponse>;
    /**
     * createUserProfile - <p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    createUserProfile(req: operations.CreateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserProfileResponse>;
    /**
     * deleteApp - <p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * deleteInstance - <p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deleteInstance(req: operations.DeleteInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstanceResponse>;
    /**
     * deleteLayer - <p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deleteLayer(req: operations.DeleteLayerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLayerResponse>;
    /**
     * deleteStack - <p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deleteStack(req: operations.DeleteStackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStackResponse>;
    /**
     * deleteUserProfile - <p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deleteUserProfile(req: operations.DeleteUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserProfileResponse>;
    /**
     * deregisterEcsCluster - <p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
    **/
    deregisterEcsCluster(req: operations.DeregisterEcsClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterEcsClusterResponse>;
    /**
     * deregisterElasticIp - <p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deregisterElasticIp(req: operations.DeregisterElasticIpRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterElasticIpResponse>;
    /**
     * deregisterInstance - <p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deregisterInstance(req: operations.DeregisterInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterInstanceResponse>;
    /**
     * deregisterRdsDbInstance - <p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deregisterRdsDbInstance(req: operations.DeregisterRdsDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterRdsDbInstanceResponse>;
    /**
     * deregisterVolume - <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    deregisterVolume(req: operations.DeregisterVolumeRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterVolumeResponse>;
    /**
     * describeAgentVersions - Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.
    **/
    describeAgentVersions(req: operations.DescribeAgentVersionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAgentVersionsResponse>;
    /**
     * describeApps - <p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeApps(req: operations.DescribeAppsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppsResponse>;
    /**
     * describeCommands - <p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeCommands(req: operations.DescribeCommandsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCommandsResponse>;
    /**
     * describeDeployments - <p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeDeployments(req: operations.DescribeDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeploymentsResponse>;
    /**
     * describeEcsClusters - <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
    **/
    describeEcsClusters(req: operations.DescribeEcsClustersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEcsClustersResponse>;
    /**
     * describeElasticIps - <p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeElasticIps(req: operations.DescribeElasticIpsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeElasticIpsResponse>;
    /**
     * describeElasticLoadBalancers - <p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeElasticLoadBalancers(req: operations.DescribeElasticLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeElasticLoadBalancersResponse>;
    /**
     * describeInstances - <p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeInstances(req: operations.DescribeInstancesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInstancesResponse>;
    /**
     * describeLayers - <p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeLayers(req: operations.DescribeLayersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLayersResponse>;
    /**
     * describeLoadBasedAutoScaling - <p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeLoadBasedAutoScaling(req: operations.DescribeLoadBasedAutoScalingRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoadBasedAutoScalingResponse>;
    /**
     * describeMyUserProfile - <p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeMyUserProfile(req: operations.DescribeMyUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMyUserProfileResponse>;
    /**
     * describeOperatingSystems - Describes the operating systems that are supported by AWS OpsWorks Stacks.
    **/
    describeOperatingSystems(req: operations.DescribeOperatingSystemsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOperatingSystemsResponse>;
    /**
     * describePermissions - <p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describePermissions(req: operations.DescribePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribePermissionsResponse>;
    /**
     * describeRaidArrays - <p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeRaidArrays(req: operations.DescribeRaidArraysRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRaidArraysResponse>;
    /**
     * describeRdsDbInstances - <p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
    **/
    describeRdsDbInstances(req: operations.DescribeRdsDbInstancesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRdsDbInstancesResponse>;
    /**
     * describeServiceErrors - <p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
    **/
    describeServiceErrors(req: operations.DescribeServiceErrorsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServiceErrorsResponse>;
    /**
     * describeStackProvisioningParameters - <p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeStackProvisioningParameters(req: operations.DescribeStackProvisioningParametersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStackProvisioningParametersResponse>;
    /**
     * describeStackSummary - <p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeStackSummary(req: operations.DescribeStackSummaryRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStackSummaryResponse>;
    /**
     * describeStacks - <p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeStacks(req: operations.DescribeStacksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStacksResponse>;
    /**
     * describeTimeBasedAutoScaling - <p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeTimeBasedAutoScaling(req: operations.DescribeTimeBasedAutoScalingRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTimeBasedAutoScalingResponse>;
    /**
     * describeUserProfiles - <p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeUserProfiles(req: operations.DescribeUserProfilesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserProfilesResponse>;
    /**
     * describeVolumes - <p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    describeVolumes(req: operations.DescribeVolumesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVolumesResponse>;
    /**
     * detachElasticLoadBalancer - <p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    detachElasticLoadBalancer(req: operations.DetachElasticLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.DetachElasticLoadBalancerResponse>;
    /**
     * disassociateElasticIp - <p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    disassociateElasticIp(req: operations.DisassociateElasticIpRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateElasticIpResponse>;
    /**
     * getHostnameSuggestion - <p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    getHostnameSuggestion(req: operations.GetHostnameSuggestionRequest, config?: AxiosRequestConfig): Promise<operations.GetHostnameSuggestionResponse>;
    /**
     * grantAccess - <note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>
    **/
    grantAccess(req: operations.GrantAccessRequest, config?: AxiosRequestConfig): Promise<operations.GrantAccessResponse>;
    /**
     * listTags - Returns a list of tags that are applied to the specified stack or layer.
    **/
    listTags(req: operations.ListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * rebootInstance - <p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    rebootInstance(req: operations.RebootInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RebootInstanceResponse>;
    /**
     * registerEcsCluster - <p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>
    **/
    registerEcsCluster(req: operations.RegisterEcsClusterRequest, config?: AxiosRequestConfig): Promise<operations.RegisterEcsClusterResponse>;
    /**
     * registerElasticIp - <p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    registerElasticIp(req: operations.RegisterElasticIpRequest, config?: AxiosRequestConfig): Promise<operations.RegisterElasticIpResponse>;
    /**
     * registerInstance - <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    registerInstance(req: operations.RegisterInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterInstanceResponse>;
    /**
     * registerRdsDbInstance - <p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    registerRdsDbInstance(req: operations.RegisterRdsDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterRdsDbInstanceResponse>;
    /**
     * registerVolume - <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    registerVolume(req: operations.RegisterVolumeRequest, config?: AxiosRequestConfig): Promise<operations.RegisterVolumeResponse>;
    /**
     * setLoadBasedAutoScaling - <p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    setLoadBasedAutoScaling(req: operations.SetLoadBasedAutoScalingRequest, config?: AxiosRequestConfig): Promise<operations.SetLoadBasedAutoScalingResponse>;
    /**
     * setPermission - <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    setPermission(req: operations.SetPermissionRequest, config?: AxiosRequestConfig): Promise<operations.SetPermissionResponse>;
    /**
     * setTimeBasedAutoScaling - <p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    setTimeBasedAutoScaling(req: operations.SetTimeBasedAutoScalingRequest, config?: AxiosRequestConfig): Promise<operations.SetTimeBasedAutoScalingResponse>;
    /**
     * startInstance - <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    startInstance(req: operations.StartInstanceRequest, config?: AxiosRequestConfig): Promise<operations.StartInstanceResponse>;
    /**
     * startStack - <p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    startStack(req: operations.StartStackRequest, config?: AxiosRequestConfig): Promise<operations.StartStackResponse>;
    /**
     * stopInstance - <p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    stopInstance(req: operations.StopInstanceRequest, config?: AxiosRequestConfig): Promise<operations.StopInstanceResponse>;
    /**
     * stopStack - <p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    stopStack(req: operations.StopStackRequest, config?: AxiosRequestConfig): Promise<operations.StopStackResponse>;
    /**
     * tagResource - Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * unassignInstance - <p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    unassignInstance(req: operations.UnassignInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UnassignInstanceResponse>;
    /**
     * unassignVolume - <p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    unassignVolume(req: operations.UnassignVolumeRequest, config?: AxiosRequestConfig): Promise<operations.UnassignVolumeResponse>;
    /**
     * untagResource - Removes tags from a specified stack or layer.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApp - <p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateApp(req: operations.UpdateAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppResponse>;
    /**
     * updateElasticIp - <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateElasticIp(req: operations.UpdateElasticIpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateElasticIpResponse>;
    /**
     * updateInstance - <p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateInstance(req: operations.UpdateInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInstanceResponse>;
    /**
     * updateLayer - <p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateLayer(req: operations.UpdateLayerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLayerResponse>;
    /**
     * updateMyUserProfile - <p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateMyUserProfile(req: operations.UpdateMyUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMyUserProfileResponse>;
    /**
     * updateRdsDbInstance - <p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateRdsDbInstance(req: operations.UpdateRdsDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRdsDbInstanceResponse>;
    /**
     * updateStack - <p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateStack(req: operations.UpdateStackRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStackResponse>;
    /**
     * updateUserProfile - <p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateUserProfile(req: operations.UpdateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserProfileResponse>;
    /**
     * updateVolume - <p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
    **/
    updateVolume(req: operations.UpdateVolumeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVolumeResponse>;
}
export {};

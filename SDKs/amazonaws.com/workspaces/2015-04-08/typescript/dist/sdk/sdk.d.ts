import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://workspaces.{region}.amazonaws.com", "https://workspaces.{region}.amazonaws.com", "http://workspaces.{region}.amazonaws.com.cn", "https://workspaces.{region}.amazonaws.com.cn"];
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
     * associateConnectionAlias - <p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
    **/
    associateConnectionAlias(req: operations.AssociateConnectionAliasRequest, config?: AxiosRequestConfig): Promise<operations.AssociateConnectionAliasResponse>;
    /**
     * associateIpGroups - Associates the specified IP access control group with the specified directory.
    **/
    associateIpGroups(req: operations.AssociateIpGroupsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateIpGroupsResponse>;
    /**
     * authorizeIpRules - <p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>
    **/
    authorizeIpRules(req: operations.AuthorizeIpRulesRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizeIpRulesResponse>;
    /**
     * copyWorkspaceImage - <p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <note> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions, contact AWS Support.</p> </note> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct AWS account. To determine if an image has been shared and to see the AWS account ID that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>
    **/
    copyWorkspaceImage(req: operations.CopyWorkspaceImageRequest, config?: AxiosRequestConfig): Promise<operations.CopyWorkspaceImageResponse>;
    /**
     * createConnectionAlias - Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
    **/
    createConnectionAlias(req: operations.CreateConnectionAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionAliasResponse>;
    /**
     * createIpGroup - <p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>
    **/
    createIpGroup(req: operations.CreateIpGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateIpGroupResponse>;
    /**
     * createTags - Creates the specified tags for the specified WorkSpaces resource.
    **/
    createTags(req: operations.CreateTagsRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagsResponse>;
    /**
     * createWorkspaceBundle - Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.
    **/
    createWorkspaceBundle(req: operations.CreateWorkspaceBundleRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceBundleResponse>;
    /**
     * createWorkspaces - <p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
    **/
    createWorkspaces(req: operations.CreateWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspacesResponse>;
    /**
     * deleteConnectionAlias - <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>
    **/
    deleteConnectionAlias(req: operations.DeleteConnectionAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionAliasResponse>;
    /**
     * deleteIpGroup - <p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>
    **/
    deleteIpGroup(req: operations.DeleteIpGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIpGroupResponse>;
    /**
     * deleteTags - Deletes the specified tags from the specified WorkSpaces resource.
    **/
    deleteTags(req: operations.DeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagsResponse>;
    /**
     * deleteWorkspaceBundle - Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.
    **/
    deleteWorkspaceBundle(req: operations.DeleteWorkspaceBundleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceBundleResponse>;
    /**
     * deleteWorkspaceImage - Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts.
    **/
    deleteWorkspaceImage(req: operations.DeleteWorkspaceImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceImageResponse>;
    /**
     * deregisterWorkspaceDirectory - <p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">AWS Directory Services pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
    **/
    deregisterWorkspaceDirectory(req: operations.DeregisterWorkspaceDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterWorkspaceDirectoryResponse>;
    /**
     * describeAccount - Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
    **/
    describeAccount(req: operations.DescribeAccountRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountResponse>;
    /**
     * describeAccountModifications - Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
    **/
    describeAccountModifications(req: operations.DescribeAccountModificationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountModificationsResponse>;
    /**
     * describeClientProperties - Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
    **/
    describeClientProperties(req: operations.DescribeClientPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClientPropertiesResponse>;
    /**
     * describeConnectionAliasPermissions - Describes the permissions that the owner of a connection alias has granted to another AWS account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
    **/
    describeConnectionAliasPermissions(req: operations.DescribeConnectionAliasPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionAliasPermissionsResponse>;
    /**
     * describeConnectionAliases - Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
    **/
    describeConnectionAliases(req: operations.DescribeConnectionAliasesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionAliasesResponse>;
    /**
     * describeIpGroups - Describes one or more of your IP access control groups.
    **/
    describeIpGroups(req: operations.DescribeIpGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIpGroupsResponse>;
    /**
     * describeTags - Describes the specified tags for the specified WorkSpaces resource.
    **/
    describeTags(req: operations.DescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTagsResponse>;
    /**
     * describeWorkspaceBundles - <p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>
    **/
    describeWorkspaceBundles(req: operations.DescribeWorkspaceBundlesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceBundlesResponse>;
    /**
     * describeWorkspaceDirectories - Describes the available directories that are registered with Amazon WorkSpaces.
    **/
    describeWorkspaceDirectories(req: operations.DescribeWorkspaceDirectoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceDirectoriesResponse>;
    /**
     * describeWorkspaceImagePermissions - Describes the permissions that the owner of an image has granted to other AWS accounts for an image.
    **/
    describeWorkspaceImagePermissions(req: operations.DescribeWorkspaceImagePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceImagePermissionsResponse>;
    /**
     * describeWorkspaceImages - Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described.
    **/
    describeWorkspaceImages(req: operations.DescribeWorkspaceImagesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceImagesResponse>;
    /**
     * describeWorkspaceSnapshots - Describes the snapshots for the specified WorkSpace.
    **/
    describeWorkspaceSnapshots(req: operations.DescribeWorkspaceSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceSnapshotsResponse>;
    /**
     * describeWorkspaces - <p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>
    **/
    describeWorkspaces(req: operations.DescribeWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspacesResponse>;
    /**
     * describeWorkspacesConnectionStatus - Describes the connection status of the specified WorkSpaces.
    **/
    describeWorkspacesConnectionStatus(req: operations.DescribeWorkspacesConnectionStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspacesConnectionStatusResponse>;
    /**
     * disassociateConnectionAlias - <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different AWS Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
    **/
    disassociateConnectionAlias(req: operations.DisassociateConnectionAliasRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateConnectionAliasResponse>;
    /**
     * disassociateIpGroups - Disassociates the specified IP access control group from the specified directory.
    **/
    disassociateIpGroups(req: operations.DisassociateIpGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateIpGroupsResponse>;
    /**
     * importWorkspaceImage - Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your AWS account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.
    **/
    importWorkspaceImage(req: operations.ImportWorkspaceImageRequest, config?: AxiosRequestConfig): Promise<operations.ImportWorkspaceImageResponse>;
    /**
     * listAvailableManagementCidrRanges - <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by AWS accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
    **/
    listAvailableManagementCidrRanges(req: operations.ListAvailableManagementCidrRangesRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailableManagementCidrRangesResponse>;
    /**
     * migrateWorkspace - <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
    **/
    migrateWorkspace(req: operations.MigrateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.MigrateWorkspaceResponse>;
    /**
     * modifyAccount - Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
    **/
    modifyAccount(req: operations.ModifyAccountRequest, config?: AxiosRequestConfig): Promise<operations.ModifyAccountResponse>;
    /**
     * modifyClientProperties - Modifies the properties of the specified Amazon WorkSpaces clients.
    **/
    modifyClientProperties(req: operations.ModifyClientPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyClientPropertiesResponse>;
    /**
     * modifySelfservicePermissions - Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
    **/
    modifySelfservicePermissions(req: operations.ModifySelfservicePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ModifySelfservicePermissionsResponse>;
    /**
     * modifyWorkspaceAccessProperties - Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.
    **/
    modifyWorkspaceAccessProperties(req: operations.ModifyWorkspaceAccessPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyWorkspaceAccessPropertiesResponse>;
    /**
     * modifyWorkspaceCreationProperties - Modify the default properties used to create WorkSpaces.
    **/
    modifyWorkspaceCreationProperties(req: operations.ModifyWorkspaceCreationPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyWorkspaceCreationPropertiesResponse>;
    /**
     * modifyWorkspaceProperties - Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>.
    **/
    modifyWorkspaceProperties(req: operations.ModifyWorkspacePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyWorkspacePropertiesResponse>;
    /**
     * modifyWorkspaceState - <p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>
    **/
    modifyWorkspaceState(req: operations.ModifyWorkspaceStateRequest, config?: AxiosRequestConfig): Promise<operations.ModifyWorkspaceStateResponse>;
    /**
     * rebootWorkspaces - <p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
    **/
    rebootWorkspaces(req: operations.RebootWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.RebootWorkspacesResponse>;
    /**
     * rebuildWorkspaces - <p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
    **/
    rebuildWorkspaces(req: operations.RebuildWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.RebuildWorkspacesResponse>;
    /**
     * registerWorkspaceDirectory - Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.
    **/
    registerWorkspaceDirectory(req: operations.RegisterWorkspaceDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.RegisterWorkspaceDirectoryResponse>;
    /**
     * restoreWorkspace - <p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>
    **/
    restoreWorkspace(req: operations.RestoreWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.RestoreWorkspaceResponse>;
    /**
     * revokeIpRules - Removes one or more rules from the specified IP access control group.
    **/
    revokeIpRules(req: operations.RevokeIpRulesRequest, config?: AxiosRequestConfig): Promise<operations.RevokeIpRulesResponse>;
    /**
     * startWorkspaces - <p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
    **/
    startWorkspaces(req: operations.StartWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.StartWorkspacesResponse>;
    /**
     * stopWorkspaces - <p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
    **/
    stopWorkspaces(req: operations.StopWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.StopWorkspacesResponse>;
    /**
     * terminateWorkspaces - <p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact AWS Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">AWS Directory Services pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
    **/
    terminateWorkspaces(req: operations.TerminateWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.TerminateWorkspacesResponse>;
    /**
     * updateConnectionAliasPermission - <p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>
    **/
    updateConnectionAliasPermission(req: operations.UpdateConnectionAliasPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionAliasPermissionResponse>;
    /**
     * updateRulesOfIpGroup - Replaces the current rules of the specified IP access control group with the specified rules.
    **/
    updateRulesOfIpGroup(req: operations.UpdateRulesOfIpGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRulesOfIpGroupResponse>;
    /**
     * updateWorkspaceBundle - <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>
    **/
    updateWorkspaceBundle(req: operations.UpdateWorkspaceBundleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceBundleResponse>;
    /**
     * updateWorkspaceImagePermission - <p>Shares or unshares an image with one account in the same AWS Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other AWS Regions as needed.</p> <note> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions, contact AWS Support.</p> </note> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across AWS accounts isn't supported at this time in the AWS GovCloud (US-West) Region. To share BYOL images across accounts in the AWS GovCloud (US-West) Region, contact AWS Support.</p> </li> </ul> </note>
    **/
    updateWorkspaceImagePermission(req: operations.UpdateWorkspaceImagePermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceImagePermissionResponse>;
}
export {};

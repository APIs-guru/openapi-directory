import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceDirectoryTypeEnum } from "./workspacedirectorytypeenum";
import { SelfservicePermissions } from "./selfservicepermissions";
import { WorkspaceDirectoryStateEnum } from "./workspacedirectorystateenum";
import { TenancyEnum } from "./tenancyenum";
import { WorkspaceAccessProperties } from "./workspaceaccessproperties";
import { DefaultWorkspaceCreationProperties } from "./defaultworkspacecreationproperties";
/**
 * Describes a directory that is used with Amazon WorkSpaces.
**/
export declare class WorkspaceDirectory extends SpeakeasyBase {
    alias?: string;
    customerUserName?: string;
    directoryId?: string;
    directoryName?: string;
    directoryType?: WorkspaceDirectoryTypeEnum;
    dnsIpAddresses?: string[];
    iamRoleId?: string;
    registrationCode?: string;
    selfservicePermissions?: SelfservicePermissions;
    state?: WorkspaceDirectoryStateEnum;
    subnetIds?: string[];
    tenancy?: TenancyEnum;
    workspaceAccessProperties?: WorkspaceAccessProperties;
    workspaceCreationProperties?: DefaultWorkspaceCreationProperties;
    workspaceSecurityGroupId?: string;
    ipGroupIds?: string[];
}

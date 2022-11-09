import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceDirectoryTypeEnum } from "./workspacedirectorytypeenum";
import { SelfservicePermissions } from "./selfservicepermissions";
import { WorkspaceDirectoryStateEnum } from "./workspacedirectorystateenum";
import { TenancyEnum } from "./tenancyenum";
import { WorkspaceAccessProperties } from "./workspaceaccessproperties";
import { DefaultWorkspaceCreationProperties } from "./defaultworkspacecreationproperties";


// WorkspaceDirectory
/** 
 * Describes a directory that is used with Amazon WorkSpaces.
**/
export class WorkspaceDirectory extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias?: string;

  @Metadata({ data: "json, name=CustomerUserName" })
  customerUserName?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=DirectoryName" })
  directoryName?: string;

  @Metadata({ data: "json, name=DirectoryType" })
  directoryType?: WorkspaceDirectoryTypeEnum;

  @Metadata({ data: "json, name=DnsIpAddresses" })
  dnsIpAddresses?: string[];

  @Metadata({ data: "json, name=IamRoleId" })
  iamRoleId?: string;

  @Metadata({ data: "json, name=RegistrationCode" })
  registrationCode?: string;

  @Metadata({ data: "json, name=SelfservicePermissions" })
  selfservicePermissions?: SelfservicePermissions;

  @Metadata({ data: "json, name=State" })
  state?: WorkspaceDirectoryStateEnum;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=Tenancy" })
  tenancy?: TenancyEnum;

  @Metadata({ data: "json, name=WorkspaceAccessProperties" })
  workspaceAccessProperties?: WorkspaceAccessProperties;

  @Metadata({ data: "json, name=WorkspaceCreationProperties" })
  workspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  @Metadata({ data: "json, name=WorkspaceSecurityGroupId" })
  workspaceSecurityGroupId?: string;

  @Metadata({ data: "json, name=ipGroupIds" })
  ipGroupIds?: string[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerUserName" })
  customerUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryName" })
  directoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryType" })
  directoryType?: WorkspaceDirectoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DnsIpAddresses" })
  dnsIpAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=IamRoleId" })
  iamRoleId?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrationCode" })
  registrationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=SelfservicePermissions" })
  selfservicePermissions?: SelfservicePermissions;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: WorkspaceDirectoryStateEnum;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tenancy" })
  tenancy?: TenancyEnum;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceAccessProperties" })
  workspaceAccessProperties?: WorkspaceAccessProperties;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceCreationProperties" })
  workspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceSecurityGroupId" })
  workspaceSecurityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=ipGroupIds" })
  ipGroupIds?: string[];
}

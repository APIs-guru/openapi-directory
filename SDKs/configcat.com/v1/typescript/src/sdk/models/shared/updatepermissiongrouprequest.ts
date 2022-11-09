import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessTypeEnum } from "./accesstypeenum";
import { EnvironmentAccessModel } from "./environmentaccessmodel";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";


export class UpdatePermissionGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessType" })
  accessType?: AccessTypeEnum;

  @Metadata({ data: "json, name=canCreateOrUpdateConfig" })
  canCreateOrUpdateConfig?: boolean;

  @Metadata({ data: "json, name=canCreateOrUpdateEnvironment" })
  canCreateOrUpdateEnvironment?: boolean;

  @Metadata({ data: "json, name=canCreateOrUpdateSetting" })
  canCreateOrUpdateSetting?: boolean;

  @Metadata({ data: "json, name=canCreateOrUpdateTag" })
  canCreateOrUpdateTag?: boolean;

  @Metadata({ data: "json, name=canDeleteConfig" })
  canDeleteConfig?: boolean;

  @Metadata({ data: "json, name=canDeleteEnvironment" })
  canDeleteEnvironment?: boolean;

  @Metadata({ data: "json, name=canDeleteSetting" })
  canDeleteSetting?: boolean;

  @Metadata({ data: "json, name=canDeleteTag" })
  canDeleteTag?: boolean;

  @Metadata({ data: "json, name=canManageIntegrations" })
  canManageIntegrations?: boolean;

  @Metadata({ data: "json, name=canManageMembers" })
  canManageMembers?: boolean;

  @Metadata({ data: "json, name=canManageProductPreferences" })
  canManageProductPreferences?: boolean;

  @Metadata({ data: "json, name=canManageWebhook" })
  canManageWebhook?: boolean;

  @Metadata({ data: "json, name=canRotateSdkKey" })
  canRotateSdkKey?: boolean;

  @Metadata({ data: "json, name=canTagSetting" })
  canTagSetting?: boolean;

  @Metadata({ data: "json, name=canUseExportImport" })
  canUseExportImport?: boolean;

  @Metadata({ data: "json, name=canViewProductAuditLog" })
  canViewProductAuditLog?: boolean;

  @Metadata({ data: "json, name=canViewProductStatistics" })
  canViewProductStatistics?: boolean;

  @Metadata({ data: "json, name=canViewSdkKey" })
  canViewSdkKey?: boolean;

  @Metadata({ data: "json, name=environmentAccesses", elemType: shared.EnvironmentAccessModel })
  environmentAccesses?: EnvironmentAccessModel[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=newEnvironmentAccessType" })
  newEnvironmentAccessType?: EnvironmentAccessTypeEnum;
}

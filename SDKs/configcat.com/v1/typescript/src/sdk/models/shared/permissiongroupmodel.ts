import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessTypeEnum } from "./accesstypeenum";
import { EnvironmentAccessModel } from "./environmentaccessmodel";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";



export class PermissionGroupModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessType" })
  accessType?: AccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=canCreateOrUpdateConfig" })
  canCreateOrUpdateConfig?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCreateOrUpdateEnvironment" })
  canCreateOrUpdateEnvironment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCreateOrUpdateSetting" })
  canCreateOrUpdateSetting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCreateOrUpdateTag" })
  canCreateOrUpdateTag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteConfig" })
  canDeleteConfig?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteEnvironment" })
  canDeleteEnvironment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteSetting" })
  canDeleteSetting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canDeleteTag" })
  canDeleteTag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canManageIntegrations" })
  canManageIntegrations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canManageMembers" })
  canManageMembers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canManageProductPreferences" })
  canManageProductPreferences?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canManageWebhook" })
  canManageWebhook?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canRotateSdkKey" })
  canRotateSdkKey?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canTagSetting" })
  canTagSetting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUseExportImport" })
  canUseExportImport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canViewSdkKey" })
  canViewSdkKey?: boolean;

  @SpeakeasyMetadata({ data: "json, name=environmentAccesses", elemType: EnvironmentAccessModel })
  environmentAccesses?: EnvironmentAccessModel[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newEnvironmentAccessType" })
  newEnvironmentAccessType?: EnvironmentAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=permissionGroupId" })
  permissionGroupId?: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessTypeEnum } from "./accesstypeenum";
import { EnvironmentAccessModel } from "./environmentaccessmodel";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";
export declare class PermissionGroupModel extends SpeakeasyBase {
    accessType?: AccessTypeEnum;
    canCreateOrUpdateConfig?: boolean;
    canCreateOrUpdateEnvironment?: boolean;
    canCreateOrUpdateSetting?: boolean;
    canCreateOrUpdateTag?: boolean;
    canDeleteConfig?: boolean;
    canDeleteEnvironment?: boolean;
    canDeleteSetting?: boolean;
    canDeleteTag?: boolean;
    canManageIntegrations?: boolean;
    canManageMembers?: boolean;
    canManageProductPreferences?: boolean;
    canManageWebhook?: boolean;
    canRotateSdkKey?: boolean;
    canTagSetting?: boolean;
    canUseExportImport?: boolean;
    canViewSdkKey?: boolean;
    environmentAccesses?: EnvironmentAccessModel[];
    name?: string;
    newEnvironmentAccessType?: EnvironmentAccessTypeEnum;
    permissionGroupId?: number;
}

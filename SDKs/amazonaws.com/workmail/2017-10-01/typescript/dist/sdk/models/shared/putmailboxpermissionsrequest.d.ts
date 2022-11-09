import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
export declare class PutMailboxPermissionsRequest extends SpeakeasyBase {
    entityId: string;
    granteeId: string;
    organizationId: string;
    permissionValues: PermissionTypeEnum[];
}

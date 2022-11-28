import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentPermissionTypeEnum } from "./documentpermissiontypeenum";
export declare class ModifyDocumentPermissionRequest extends SpeakeasyBase {
    accountIdsToAdd?: string[];
    accountIdsToRemove?: string[];
    name: string;
    permissionType: DocumentPermissionTypeEnum;
    sharedDocumentVersion?: string;
}

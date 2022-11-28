import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentPermissionTypeEnum } from "./documentpermissiontypeenum";
export declare class DescribeDocumentPermissionRequest extends SpeakeasyBase {
    maxResults?: number;
    name: string;
    nextToken?: string;
    permissionType: DocumentPermissionTypeEnum;
}

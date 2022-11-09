import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceSharePermissionSummary } from "./resourcesharepermissionsummary";
export declare class ListPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: ResourceSharePermissionSummary[];
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceSharePermissionSummary } from "./resourcesharepermissionsummary";
export declare class ListResourceSharePermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: ResourceSharePermissionSummary[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
export declare class ListMailboxPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: Permission[];
}

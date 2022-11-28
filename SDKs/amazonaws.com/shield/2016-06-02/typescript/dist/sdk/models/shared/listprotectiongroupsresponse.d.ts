import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroup } from "./protectiongroup";
export declare class ListProtectionGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    protectionGroups: ProtectionGroup[];
}

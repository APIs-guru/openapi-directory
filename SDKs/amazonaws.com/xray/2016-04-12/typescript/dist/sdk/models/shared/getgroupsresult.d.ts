import { SpeakeasyBase } from "../../../internal/utils";
import { GroupSummary } from "./groupsummary";
export declare class GetGroupsResult extends SpeakeasyBase {
    groups?: GroupSummary[];
    nextToken?: string;
}

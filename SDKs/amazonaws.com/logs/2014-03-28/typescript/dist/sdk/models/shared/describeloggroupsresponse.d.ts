import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LogGroup } from "./loggroup";
export declare class DescribeLogGroupsResponse extends SpeakeasyBase {
    logGroups?: LogGroup[];
    nextToken?: string;
}

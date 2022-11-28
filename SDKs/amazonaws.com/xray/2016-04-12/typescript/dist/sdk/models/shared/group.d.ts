import { SpeakeasyBase } from "../../../internal/utils";
import { InsightsConfiguration } from "./insightsconfiguration";
/**
 * Details and metadata for a group.
**/
export declare class Group extends SpeakeasyBase {
    filterExpression?: string;
    groupArn?: string;
    groupName?: string;
    insightsConfiguration?: InsightsConfiguration;
}

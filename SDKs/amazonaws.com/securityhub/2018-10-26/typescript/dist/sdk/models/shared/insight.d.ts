import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFindingFilters } from "./awssecurityfindingfilters";
/**
 * Contains information about a Security Hub insight.
**/
export declare class Insight extends SpeakeasyBase {
    filters: AwsSecurityFindingFilters;
    groupByAttribute: string;
    insightArn: string;
    name: string;
}

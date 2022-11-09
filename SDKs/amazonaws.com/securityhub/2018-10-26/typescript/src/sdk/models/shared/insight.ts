import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsSecurityFindingFilters } from "./awssecurityfindingfilters";


// Insight
/** 
 * Contains information about a Security Hub insight.
**/
export class Insight extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters: AwsSecurityFindingFilters;

  @Metadata({ data: "json, name=GroupByAttribute" })
  groupByAttribute: string;

  @Metadata({ data: "json, name=InsightArn" })
  insightArn: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

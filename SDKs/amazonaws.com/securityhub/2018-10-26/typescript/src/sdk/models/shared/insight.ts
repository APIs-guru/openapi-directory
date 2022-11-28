import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFindingFilters } from "./awssecurityfindingfilters";



// Insight
/** 
 * Contains information about a Security Hub insight.
**/
export class Insight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters: AwsSecurityFindingFilters;

  @SpeakeasyMetadata({ data: "json, name=GroupByAttribute" })
  groupByAttribute: string;

  @SpeakeasyMetadata({ data: "json, name=InsightArn" })
  insightArn: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

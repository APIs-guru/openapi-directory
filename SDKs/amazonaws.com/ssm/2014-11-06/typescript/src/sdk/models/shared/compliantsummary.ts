import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SeveritySummary } from "./severitysummary";


// CompliantSummary
/** 
 * A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.
**/
export class CompliantSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompliantCount" })
  compliantCount?: number;

  @Metadata({ data: "json, name=SeveritySummary" })
  severitySummary?: SeveritySummary;
}

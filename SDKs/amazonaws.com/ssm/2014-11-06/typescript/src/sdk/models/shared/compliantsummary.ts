import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeveritySummary } from "./severitysummary";



// CompliantSummary
/** 
 * A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.
**/
export class CompliantSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompliantCount" })
  compliantCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SeveritySummary" })
  severitySummary?: SeveritySummary;
}

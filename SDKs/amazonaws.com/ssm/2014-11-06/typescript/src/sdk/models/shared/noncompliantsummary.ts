import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeveritySummary } from "./severitysummary";



// NonCompliantSummary
/** 
 * A summary of resources that aren't compliant. The summary is organized according to resource type.
**/
export class NonCompliantSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NonCompliantCount" })
  nonCompliantCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SeveritySummary" })
  severitySummary?: SeveritySummary;
}

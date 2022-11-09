import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SeveritySummary } from "./severitysummary";


// NonCompliantSummary
/** 
 * A summary of resources that aren't compliant. The summary is organized according to resource type.
**/
export class NonCompliantSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=NonCompliantCount" })
  nonCompliantCount?: number;

  @Metadata({ data: "json, name=SeveritySummary" })
  severitySummary?: SeveritySummary;
}

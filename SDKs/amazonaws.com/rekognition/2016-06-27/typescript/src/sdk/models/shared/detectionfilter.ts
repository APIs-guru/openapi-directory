import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectionFilter
/** 
 * A set of parameters that allow you to filter out certain results from your returned results.
**/
export class DetectionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=MinBoundingBoxHeight" })
  minBoundingBoxHeight?: number;

  @Metadata({ data: "json, name=MinBoundingBoxWidth" })
  minBoundingBoxWidth?: number;

  @Metadata({ data: "json, name=MinConfidence" })
  minConfidence?: number;
}

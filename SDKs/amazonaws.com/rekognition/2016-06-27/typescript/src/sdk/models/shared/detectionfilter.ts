import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectionFilter
/** 
 * A set of parameters that allow you to filter out certain results from your returned results.
**/
export class DetectionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MinBoundingBoxHeight" })
  minBoundingBoxHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=MinBoundingBoxWidth" })
  minBoundingBoxWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=MinConfidence" })
  minConfidence?: number;
}

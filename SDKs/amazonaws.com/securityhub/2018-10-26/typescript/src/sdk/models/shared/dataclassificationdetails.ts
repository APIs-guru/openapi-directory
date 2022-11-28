import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationResult } from "./classificationresult";



// DataClassificationDetails
/** 
 * Provides details about sensitive data that was detected on a resource.
**/
export class DataClassificationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DetailedResultsLocation" })
  detailedResultsLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=Result" })
  result?: ClassificationResult;
}

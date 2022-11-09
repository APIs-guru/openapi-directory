import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationResult } from "./classificationresult";


// DataClassificationDetails
/** 
 * Provides details about sensitive data that was detected on a resource.
**/
export class DataClassificationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DetailedResultsLocation" })
  detailedResultsLocation?: string;

  @Metadata({ data: "json, name=Result" })
  result?: ClassificationResult;
}

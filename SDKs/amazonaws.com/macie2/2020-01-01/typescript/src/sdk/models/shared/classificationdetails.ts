import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationResult } from "./classificationresult";



// ClassificationDetails
/** 
 * Provides information about a sensitive data finding, including the classification job that produced the finding.
**/
export class ClassificationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailedResultsLocation" })
  detailedResultsLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ClassificationResult;
}

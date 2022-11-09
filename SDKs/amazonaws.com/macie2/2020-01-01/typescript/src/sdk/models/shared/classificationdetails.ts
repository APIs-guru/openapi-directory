import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationResult } from "./classificationresult";


// ClassificationDetails
/** 
 * Provides information about a sensitive data finding, including the classification job that produced the finding.
**/
export class ClassificationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=detailedResultsLocation" })
  detailedResultsLocation?: string;

  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=result" })
  result?: ClassificationResult;
}

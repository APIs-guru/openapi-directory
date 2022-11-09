import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CelebrityDetail } from "./celebritydetail";


// CelebrityRecognition
/** 
 * Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.
**/
export class CelebrityRecognition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Celebrity" })
  celebrity?: CelebrityDetail;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CelebrityDetail } from "./celebritydetail";



// CelebrityRecognition
/** 
 * Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.
**/
export class CelebrityRecognition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Celebrity" })
  celebrity?: CelebrityDetail;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonDetail } from "./persondetail";



// PersonDetection
/** 
 * <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
**/
export class PersonDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Person" })
  person?: PersonDetail;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}

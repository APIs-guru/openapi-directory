import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PersonDetail } from "./persondetail";


// PersonDetection
/** 
 * <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
**/
export class PersonDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=Person" })
  person?: PersonDetail;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}

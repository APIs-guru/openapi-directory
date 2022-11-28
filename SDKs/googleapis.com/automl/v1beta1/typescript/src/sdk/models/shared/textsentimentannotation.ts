import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextSentimentAnnotation
/** 
 * Contains annotation details specific to text sentiment.
**/
export class TextSentimentAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sentiment" })
  sentiment?: number;
}

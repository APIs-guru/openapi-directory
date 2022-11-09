import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextSentimentAnnotation
/** 
 * Contains annotation details specific to text sentiment.
**/
export class TextSentimentAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=sentiment" })
  sentiment?: number;
}

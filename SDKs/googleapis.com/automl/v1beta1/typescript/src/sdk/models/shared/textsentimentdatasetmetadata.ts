import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextSentimentDatasetMetadata
/** 
 * Dataset metadata for text sentiment.
**/
export class TextSentimentDatasetMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sentimentMax" })
  sentimentMax?: number;
}

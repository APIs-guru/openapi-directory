import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextSentimentDatasetMetadata
/** 
 * Dataset metadata for text sentiment.
**/
export class TextSentimentDatasetMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=sentimentMax" })
  sentimentMax?: number;
}

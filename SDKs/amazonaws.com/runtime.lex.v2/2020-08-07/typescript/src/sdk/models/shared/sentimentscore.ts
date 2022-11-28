import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SentimentScore
/** 
 * The individual sentiment responses for the utterance.
**/
export class SentimentScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mixed" })
  mixed?: number;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: number;

  @SpeakeasyMetadata({ data: "json, name=neutral" })
  neutral?: number;

  @SpeakeasyMetadata({ data: "json, name=positive" })
  positive?: number;
}

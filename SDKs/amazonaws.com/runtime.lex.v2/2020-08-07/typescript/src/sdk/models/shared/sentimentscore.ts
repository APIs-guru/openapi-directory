import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SentimentScore
/** 
 * The individual sentiment responses for the utterance.
**/
export class SentimentScore extends SpeakeasyBase {
  @Metadata({ data: "json, name=mixed" })
  mixed?: number;

  @Metadata({ data: "json, name=negative" })
  negative?: number;

  @Metadata({ data: "json, name=neutral" })
  neutral?: number;

  @Metadata({ data: "json, name=positive" })
  positive?: number;
}

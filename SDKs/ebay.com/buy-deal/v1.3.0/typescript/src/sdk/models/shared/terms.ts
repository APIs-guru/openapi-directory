import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Terms
/** 
 * The terms for the event, provided in a full-text description and summary.
**/
export class Terms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullText" })
  fullText?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}

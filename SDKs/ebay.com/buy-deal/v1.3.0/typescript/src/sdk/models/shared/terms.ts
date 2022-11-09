import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Terms
/** 
 * The terms for the event, provided in a full-text description and summary.
**/
export class Terms extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullText" })
  fullText?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SsmlMessage
/** 
 * Defines a Speech Synthesis Markup Language (SSML) prompt.
**/
export class SsmlMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

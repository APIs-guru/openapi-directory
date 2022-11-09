import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SsmlMessage
/** 
 * Defines a Speech Synthesis Markup Language (SSML) prompt.
**/
export class SsmlMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: string;
}

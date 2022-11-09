import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RawMessage
/** 
 * Represents the raw content of an email message.
**/
export class RawMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RawMessage
/** 
 * The raw email message.
**/
export class RawMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: string;
}

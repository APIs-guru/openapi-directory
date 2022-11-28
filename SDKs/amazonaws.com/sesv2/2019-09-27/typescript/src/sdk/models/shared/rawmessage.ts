import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RawMessage
/** 
 * Represents the raw content of an email message.
**/
export class RawMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: string;
}

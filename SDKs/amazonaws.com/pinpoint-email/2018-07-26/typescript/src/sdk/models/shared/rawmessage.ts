import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RawMessage
/** 
 * The raw email message.
**/
export class RawMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: string;
}

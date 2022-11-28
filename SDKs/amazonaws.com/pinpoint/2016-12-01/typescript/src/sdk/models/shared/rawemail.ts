import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RawEmail
/** 
 * Specifies the contents of an email message, represented as a raw MIME message.
**/
export class RawEmail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: string;
}

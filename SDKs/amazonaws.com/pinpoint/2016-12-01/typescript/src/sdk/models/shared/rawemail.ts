import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RawEmail
/** 
 * Specifies the contents of an email message, represented as a raw MIME message.
**/
export class RawEmail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SimpleEmailPart
/** 
 * Specifies the subject or body of an email message, represented as textual email data and the applicable character set.
**/
export class SimpleEmailPart extends SpeakeasyBase {
  @Metadata({ data: "json, name=Charset" })
  charset?: string;

  @Metadata({ data: "json, name=Data" })
  data?: string;
}

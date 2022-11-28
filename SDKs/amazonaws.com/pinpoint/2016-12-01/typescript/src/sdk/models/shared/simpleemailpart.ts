import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SimpleEmailPart
/** 
 * Specifies the subject or body of an email message, represented as textual email data and the applicable character set.
**/
export class SimpleEmailPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Charset" })
  charset?: string;

  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: string;
}

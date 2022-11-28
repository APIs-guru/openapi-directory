import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Content
/** 
 * An object that represents the content of the email, and optionally a character set specification.
**/
export class Content extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Charset" })
  charset?: string;

  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: string;
}

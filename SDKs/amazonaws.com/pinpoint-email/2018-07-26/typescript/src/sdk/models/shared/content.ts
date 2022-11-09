import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Content
/** 
 * An object that represents the content of the email, and optionally a character set specification.
**/
export class Content extends SpeakeasyBase {
  @Metadata({ data: "json, name=Charset" })
  charset?: string;

  @Metadata({ data: "json, name=Data" })
  data: string;
}

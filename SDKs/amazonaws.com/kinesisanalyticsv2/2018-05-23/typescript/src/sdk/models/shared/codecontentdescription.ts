import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ApplicationCodeLocationDescription } from "./s3applicationcodelocationdescription";



// CodeContentDescription
/** 
 * Describes details about the code of a Kinesis Data Analytics application.
**/
export class CodeContentDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeMD5" })
  codeMd5?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=S3ApplicationCodeLocationDescription" })
  s3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;

  @SpeakeasyMetadata({ data: "json, name=TextContent" })
  textContent?: string;
}

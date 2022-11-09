import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ApplicationCodeLocationDescription } from "./s3applicationcodelocationdescription";


// CodeContentDescription
/** 
 * Describes details about the code of a Kinesis Data Analytics application.
**/
export class CodeContentDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeMD5" })
  codeMd5?: string;

  @Metadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @Metadata({ data: "json, name=S3ApplicationCodeLocationDescription" })
  s3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;

  @Metadata({ data: "json, name=TextContent" })
  textContent?: string;
}

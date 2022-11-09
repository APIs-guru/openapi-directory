import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Range
/** 
 * Specifies the location of an occurrence of sensitive data in a non-binary text file, such as an HTML, TXT, or XML file.
**/
export class Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=startColumn" })
  startColumn?: number;
}

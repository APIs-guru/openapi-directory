import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Range
/** 
 * Specifies the location of an occurrence of sensitive data in a non-binary text file, such as an HTML, TXT, or XML file.
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=startColumn" })
  startColumn?: number;
}

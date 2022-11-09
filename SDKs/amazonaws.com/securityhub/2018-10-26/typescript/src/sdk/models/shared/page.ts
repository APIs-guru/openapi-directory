import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Range } from "./range";
import { Range } from "./range";


// Page
/** 
 * An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.
**/
export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=LineRange" })
  lineRange?: Range;

  @Metadata({ data: "json, name=OffsetRange" })
  offsetRange?: Range;

  @Metadata({ data: "json, name=PageNumber" })
  pageNumber?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Range } from "./range";
import { Range } from "./range";


// Page
/** 
 * Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.
**/
export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineRange" })
  lineRange?: Range;

  @Metadata({ data: "json, name=offsetRange" })
  offsetRange?: Range;

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber?: number;
}

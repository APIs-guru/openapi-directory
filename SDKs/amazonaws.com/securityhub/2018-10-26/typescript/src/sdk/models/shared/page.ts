import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";



// Page
/** 
 * An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.
**/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LineRange" })
  lineRange?: Range;

  @SpeakeasyMetadata({ data: "json, name=OffsetRange" })
  offsetRange?: Range;

  @SpeakeasyMetadata({ data: "json, name=PageNumber" })
  pageNumber?: number;
}

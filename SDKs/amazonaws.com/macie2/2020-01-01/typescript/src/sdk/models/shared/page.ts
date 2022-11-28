import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";



// Page
/** 
 * Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.
**/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineRange" })
  lineRange?: Range;

  @SpeakeasyMetadata({ data: "json, name=offsetRange" })
  offsetRange?: Range;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;
}

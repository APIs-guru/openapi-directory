import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
/**
 * An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.
**/
export declare class Page extends SpeakeasyBase {
    lineRange?: Range;
    offsetRange?: Range;
    pageNumber?: number;
}

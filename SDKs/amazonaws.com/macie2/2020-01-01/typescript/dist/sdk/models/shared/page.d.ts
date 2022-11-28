import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
/**
 * Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.
**/
export declare class Page extends SpeakeasyBase {
    lineRange?: Range;
    offsetRange?: Range;
    pageNumber?: number;
}

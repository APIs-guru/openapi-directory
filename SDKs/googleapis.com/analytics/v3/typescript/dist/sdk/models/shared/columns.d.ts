import { SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
/**
 * Lists columns (dimensions and metrics) for a particular report type.
**/
export declare class Columns extends SpeakeasyBase {
    attributeNames?: string[];
    etag?: string;
    items?: Column[];
    kind?: string;
    totalResults?: number;
}

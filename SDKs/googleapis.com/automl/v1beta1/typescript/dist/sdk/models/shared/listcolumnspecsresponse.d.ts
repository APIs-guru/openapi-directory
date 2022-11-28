import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnSpec } from "./columnspec";
/**
 * Response message for AutoMl.ListColumnSpecs.
**/
export declare class ListColumnSpecsResponse extends SpeakeasyBase {
    columnSpecs?: ColumnSpec[];
    nextPageToken?: string;
}

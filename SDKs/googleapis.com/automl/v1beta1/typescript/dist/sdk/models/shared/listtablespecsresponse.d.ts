import { SpeakeasyBase } from "../../../internal/utils";
import { TableSpec } from "./tablespec";
/**
 * Response message for AutoMl.ListTableSpecs.
**/
export declare class ListTableSpecsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tableSpecs?: TableSpec[];
}

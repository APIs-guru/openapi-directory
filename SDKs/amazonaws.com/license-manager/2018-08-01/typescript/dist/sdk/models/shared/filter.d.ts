import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
**/
export declare class Filter extends SpeakeasyBase {
    name?: string;
    values?: string[];
}

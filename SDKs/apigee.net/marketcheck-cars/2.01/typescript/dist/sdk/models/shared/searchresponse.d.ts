import { SpeakeasyBase } from "../../../internal/utils";
import { BaseListing } from "./baselisting";
/**
 * Search query response
**/
export declare class SearchResponse extends SpeakeasyBase {
    facets?: Map<string, any>;
    listings?: BaseListing[];
    numFound?: number;
    rangeFacets?: Map<string, any>;
    stats?: Map<string, any>;
}

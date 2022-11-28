import { SpeakeasyBase } from "../../../internal/utils";
import { RvBaseListing } from "./rvbaselisting";
/**
 * RV search query response
**/
export declare class RvSearchResponse extends SpeakeasyBase {
    facets?: Map<string, any>;
    listings?: RvBaseListing[];
    numFound?: number;
    rangeFacets?: Map<string, any>;
    stats?: Map<string, any>;
}

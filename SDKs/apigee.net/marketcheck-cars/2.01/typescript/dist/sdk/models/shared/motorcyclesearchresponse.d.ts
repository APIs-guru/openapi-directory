import { SpeakeasyBase } from "../../../internal/utils";
import { MotorcycleBaseListing } from "./motorcyclebaselisting";
/**
 * Motorcycle search query response
**/
export declare class MotorcycleSearchResponse extends SpeakeasyBase {
    facets?: Map<string, any>;
    listings?: MotorcycleBaseListing[];
    numFound?: number;
    rangeFacets?: Map<string, any>;
    stats?: Map<string, any>;
}

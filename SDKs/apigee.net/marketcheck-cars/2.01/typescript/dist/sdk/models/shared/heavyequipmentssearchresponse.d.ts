import { SpeakeasyBase } from "../../../internal/utils";
import { HeavyEquipmentsBaseListing } from "./heavyequipmentsbaselisting";
/**
 * Heavy Equipments search query response
**/
export declare class HeavyEquipmentsSearchResponse extends SpeakeasyBase {
    facets?: Map<string, any>;
    listings?: HeavyEquipmentsBaseListing[];
    numFound?: number;
    rangeFacets?: Map<string, any>;
    stats?: Map<string, any>;
}

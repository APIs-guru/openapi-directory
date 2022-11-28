import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeavyEquipmentsBaseListing } from "./heavyequipmentsbaselisting";



// HeavyEquipmentsSearchResponse
/** 
 * Heavy Equipments search query response
**/
export class HeavyEquipmentsSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facets" })
  facets?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=listings", elemType: HeavyEquipmentsBaseListing })
  listings?: HeavyEquipmentsBaseListing[];

  @SpeakeasyMetadata({ data: "json, name=num_found" })
  numFound?: number;

  @SpeakeasyMetadata({ data: "json, name=range_facets" })
  rangeFacets?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: Map<string, any>;
}

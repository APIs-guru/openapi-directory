import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MotorcycleBaseListing } from "./motorcyclebaselisting";



// MotorcycleSearchResponse
/** 
 * Motorcycle search query response
**/
export class MotorcycleSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facets" })
  facets?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=listings", elemType: MotorcycleBaseListing })
  listings?: MotorcycleBaseListing[];

  @SpeakeasyMetadata({ data: "json, name=num_found" })
  numFound?: number;

  @SpeakeasyMetadata({ data: "json, name=range_facets" })
  rangeFacets?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: Map<string, any>;
}

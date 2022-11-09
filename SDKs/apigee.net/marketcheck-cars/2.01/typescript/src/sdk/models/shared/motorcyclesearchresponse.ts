import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MotorcycleBaseListing } from "./motorcyclebaselisting";


// MotorcycleSearchResponse
/** 
 * Motorcycle search query response
**/
export class MotorcycleSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=facets" })
  facets?: Map<string, any>;

  @Metadata({ data: "json, name=listings", elemType: shared.MotorcycleBaseListing })
  listings?: MotorcycleBaseListing[];

  @Metadata({ data: "json, name=num_found" })
  numFound?: number;

  @Metadata({ data: "json, name=range_facets" })
  rangeFacets?: Map<string, any>;

  @Metadata({ data: "json, name=stats" })
  stats?: Map<string, any>;
}

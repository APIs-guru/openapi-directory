import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RvBaseListing } from "./rvbaselisting";



// RvSearchResponse
/** 
 * RV search query response
**/
export class RvSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facets" })
  facets?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=listings", elemType: RvBaseListing })
  listings?: RvBaseListing[];

  @SpeakeasyMetadata({ data: "json, name=num_found" })
  numFound?: number;

  @SpeakeasyMetadata({ data: "json, name=range_facets" })
  rangeFacets?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: Map<string, any>;
}

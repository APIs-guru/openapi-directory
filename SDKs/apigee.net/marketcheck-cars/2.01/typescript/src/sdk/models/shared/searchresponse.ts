import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseListing } from "./baselisting";


// SearchResponse
/** 
 * Search query response
**/
export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=facets" })
  facets?: Map<string, any>;

  @Metadata({ data: "json, name=listings", elemType: shared.BaseListing })
  listings?: BaseListing[];

  @Metadata({ data: "json, name=num_found" })
  numFound?: number;

  @Metadata({ data: "json, name=range_facets" })
  rangeFacets?: Map<string, any>;

  @Metadata({ data: "json, name=stats" })
  stats?: Map<string, any>;
}

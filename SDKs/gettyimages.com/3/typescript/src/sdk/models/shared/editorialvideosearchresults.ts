import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchFacetsResponse } from "./searchfacetsresponse";
import { RelatedSearch } from "./relatedsearch";
import { EditorialVideoSearchItem } from "./editorialvideosearchitem";


export class EditorialVideoSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=facets" })
  facets?: SearchFacetsResponse;

  @Metadata({ data: "json, name=related_searches", elemType: shared.RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;

  @Metadata({ data: "json, name=videos", elemType: shared.EditorialVideoSearchItem })
  videos?: EditorialVideoSearchItem[];
}

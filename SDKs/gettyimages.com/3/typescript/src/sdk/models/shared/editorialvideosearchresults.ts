import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchFacetsResponse } from "./searchfacetsresponse";
import { RelatedSearch } from "./relatedsearch";
import { EditorialVideoSearchItem } from "./editorialvideosearchitem";



export class EditorialVideoSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facets" })
  facets?: SearchFacetsResponse;

  @SpeakeasyMetadata({ data: "json, name=related_searches", elemType: RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;

  @SpeakeasyMetadata({ data: "json, name=videos", elemType: EditorialVideoSearchItem })
  videos?: EditorialVideoSearchItem[];
}

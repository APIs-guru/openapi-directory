import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoCorrections } from "./autocorrections";
import { SearchFacetsResponse } from "./searchfacetsresponse";
import { RelatedSearch } from "./relatedsearch";
import { CreativeVideoSearchItem } from "./creativevideosearchitem";



export class CreativeVideoSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @SpeakeasyMetadata({ data: "json, name=facets" })
  facets?: SearchFacetsResponse;

  @SpeakeasyMetadata({ data: "json, name=related_searches", elemType: RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;

  @SpeakeasyMetadata({ data: "json, name=videos", elemType: CreativeVideoSearchItem })
  videos?: CreativeVideoSearchItem[];
}

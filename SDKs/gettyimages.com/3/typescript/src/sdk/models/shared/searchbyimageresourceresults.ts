import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoCorrections } from "./autocorrections";
import { SearchFacetsResponse } from "./searchfacetsresponse";
import { RelatedSearch } from "./relatedsearch";



export class SearchByImageResourceResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @SpeakeasyMetadata({ data: "json, name=facets" })
  facets?: SearchFacetsResponse;

  @SpeakeasyMetadata({ data: "json, name=image_fingerprint" })
  imageFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: any;

  @SpeakeasyMetadata({ data: "json, name=related_searches", elemType: RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;
}

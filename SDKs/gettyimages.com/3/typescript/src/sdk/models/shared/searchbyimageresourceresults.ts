import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoCorrections } from "./autocorrections";
import { SearchFacetsResponse } from "./searchfacetsresponse";
import { RelatedSearch } from "./relatedsearch";


export class SearchByImageResourceResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @Metadata({ data: "json, name=facets" })
  facets?: SearchFacetsResponse;

  @Metadata({ data: "json, name=image_fingerprint" })
  imageFingerprint?: string;

  @Metadata({ data: "json, name=images" })
  images?: any;

  @Metadata({ data: "json, name=related_searches", elemType: shared.RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;
}

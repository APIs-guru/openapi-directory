import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageSearchItem } from "./imagesearchitem";
import { RelatedSearch } from "./relatedsearch";


export class ImageSearchItemSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=images", elemType: shared.ImageSearchItem })
  images?: ImageSearchItem[];

  @Metadata({ data: "json, name=related_searches", elemType: shared.RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;
}

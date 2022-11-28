import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageSearchItem } from "./imagesearchitem";
import { RelatedSearch } from "./relatedsearch";



export class ImageSearchItemSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageSearchItem })
  images?: ImageSearchItem[];

  @SpeakeasyMetadata({ data: "json, name=related_searches", elemType: RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;
}

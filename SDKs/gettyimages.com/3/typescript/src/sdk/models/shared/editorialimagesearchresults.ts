import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageSearchItemEditorial } from "./imagesearchitemeditorial";
import { RelatedSearch } from "./relatedsearch";



export class EditorialImageSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageSearchItemEditorial })
  images?: ImageSearchItemEditorial[];

  @SpeakeasyMetadata({ data: "json, name=related_searches", elemType: RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;
}

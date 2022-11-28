import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoCorrections } from "./autocorrections";
import { ImageSearchItemCreative } from "./imagesearchitemcreative";
import { RelatedSearch } from "./relatedsearch";



export class CreativeImageSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageSearchItemCreative })
  images?: ImageSearchItemCreative[];

  @SpeakeasyMetadata({ data: "json, name=related_searches", elemType: RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;
}

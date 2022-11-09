import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoCorrections } from "./autocorrections";
import { ImageSearchItemCreative } from "./imagesearchitemcreative";
import { RelatedSearch } from "./relatedsearch";


export class CreativeImageSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @Metadata({ data: "json, name=images", elemType: shared.ImageSearchItemCreative })
  images?: ImageSearchItemCreative[];

  @Metadata({ data: "json, name=related_searches", elemType: shared.RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;
}

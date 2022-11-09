import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageSearchItemEditorial } from "./imagesearchitemeditorial";
import { RelatedSearch } from "./relatedsearch";


export class EditorialImageSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=images", elemType: shared.ImageSearchItemEditorial })
  images?: ImageSearchItemEditorial[];

  @Metadata({ data: "json, name=related_searches", elemType: shared.RelatedSearch })
  relatedSearches?: RelatedSearch[];

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;
}

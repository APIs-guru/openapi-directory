import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LfTag } from "./lftag";



export class SearchTablesByLfTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Expression", elemType: LfTag })
  expression: LfTag[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

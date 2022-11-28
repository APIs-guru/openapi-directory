import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagsJson200ApplicationJsonExtras extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: any[];
}


export class GetTagsJson200ApplicationJsonTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pm_count" })
  pmCount?: number;

  @SpeakeasyMetadata({ data: "json, name=target_tag" })
  targetTag?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class GetTagsJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extras" })
  extras?: GetTagsJson200ApplicationJsonExtras;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: GetTagsJson200ApplicationJsonTags })
  tags?: GetTagsJson200ApplicationJsonTags[];
}


export class GetTagsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTagsJson200ApplicationJsonObject?: GetTagsJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

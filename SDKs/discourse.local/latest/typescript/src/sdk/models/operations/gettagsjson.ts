import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagsJson200ApplicationJsonExtras extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories" })
  categories?: any[];
}


export class GetTagsJson200ApplicationJsonTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=pm_count" })
  pmCount?: number;

  @Metadata({ data: "json, name=target_tag" })
  targetTag?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class GetTagsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=extras" })
  extras?: GetTagsJson200ApplicationJsonExtras;

  @Metadata({ data: "json, name=tags", elemType: operations.GetTagsJson200ApplicationJsonTags })
  tags?: GetTagsJson200ApplicationJsonTags[];
}


export class GetTagsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTagsJson200ApplicationJsonObject?: GetTagsJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}

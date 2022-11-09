import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTagGroupsJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class PostTagGroupsJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostTagGroupsJsonRequestBody;
}


export class PostTagGroupsJson200ApplicationJsonTagGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=one_per_topic" })
  onePerTopic: boolean;

  @Metadata({ data: "json, name=parent_tag_name" })
  parentTagName: any[];

  @Metadata({ data: "json, name=permissions" })
  permissions: Map<string, any>;

  @Metadata({ data: "json, name=tag_names" })
  tagNames: any[];
}


export class PostTagGroupsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag_group" })
  tagGroup: PostTagGroupsJson200ApplicationJsonTagGroup;
}


export class PostTagGroupsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postTagGroupsJson200ApplicationJsonObject?: PostTagGroupsJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}

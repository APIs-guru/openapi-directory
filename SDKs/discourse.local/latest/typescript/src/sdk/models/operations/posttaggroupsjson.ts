import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTagGroupsJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class PostTagGroupsJson200ApplicationJsonTagGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=one_per_topic" })
  onePerTopic: boolean;

  @SpeakeasyMetadata({ data: "json, name=parent_tag_name" })
  parentTagName: any[];

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tag_names" })
  tagNames: any[];
}


export class PostTagGroupsJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag_group" })
  tagGroup: PostTagGroupsJson200ApplicationJsonTagGroup;
}


export class PostTagGroupsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostTagGroupsJsonRequestBody;
}


export class PostTagGroupsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postTagGroupsJson200ApplicationJsonObject?: PostTagGroupsJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagGroupsJson200ApplicationJsonTagGroupsPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=staff" })
  staff?: number;
}


export class GetTagGroupsJson200ApplicationJsonTagGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=one_per_topic" })
  onePerTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parent_tag_name" })
  parentTagName?: any[];

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: GetTagGroupsJson200ApplicationJsonTagGroupsPermissions;

  @SpeakeasyMetadata({ data: "json, name=tag_names" })
  tagNames?: any[];
}


export class GetTagGroupsJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag_groups", elemType: GetTagGroupsJson200ApplicationJsonTagGroups })
  tagGroups?: GetTagGroupsJson200ApplicationJsonTagGroups[];
}


export class GetTagGroupsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTagGroupsJson200ApplicationJsonObject?: GetTagGroupsJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

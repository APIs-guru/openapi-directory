import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagGroupsJson200ApplicationJsonTagGroupsPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=staff" })
  staff?: number;
}


export class GetTagGroupsJson200ApplicationJsonTagGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=one_per_topic" })
  onePerTopic?: boolean;

  @Metadata({ data: "json, name=parent_tag_name" })
  parentTagName?: any[];

  @Metadata({ data: "json, name=permissions" })
  permissions?: GetTagGroupsJson200ApplicationJsonTagGroupsPermissions;

  @Metadata({ data: "json, name=tag_names" })
  tagNames?: any[];
}


export class GetTagGroupsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag_groups", elemType: operations.GetTagGroupsJson200ApplicationJsonTagGroups })
  tagGroups?: GetTagGroupsJson200ApplicationJsonTagGroups[];
}


export class GetTagGroupsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTagGroupsJson200ApplicationJsonObject?: GetTagGroupsJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagGroupsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTagGroupsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagGroupsIdJsonPathParams;
}


export class GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=everyone" })
  everyone?: number;
}


export class GetTagGroupsIdJson200ApplicationJsonTagGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=one_per_topic" })
  onePerTopic?: boolean;

  @Metadata({ data: "json, name=parent_tag_name" })
  parentTagName?: any[];

  @Metadata({ data: "json, name=permissions" })
  permissions?: GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions;

  @Metadata({ data: "json, name=tag_names" })
  tagNames?: any[];
}


export class GetTagGroupsIdJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag_group" })
  tagGroup?: GetTagGroupsIdJson200ApplicationJsonTagGroup;
}


export class GetTagGroupsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTagGroupsIdJson200ApplicationJsonObject?: GetTagGroupsIdJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}

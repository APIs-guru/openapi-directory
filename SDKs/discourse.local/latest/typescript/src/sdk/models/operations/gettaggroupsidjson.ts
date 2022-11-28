import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagGroupsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=everyone" })
  everyone?: number;
}


export class GetTagGroupsIdJson200ApplicationJsonTagGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=one_per_topic" })
  onePerTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parent_tag_name" })
  parentTagName?: any[];

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions;

  @SpeakeasyMetadata({ data: "json, name=tag_names" })
  tagNames?: any[];
}


export class GetTagGroupsIdJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag_group" })
  tagGroup?: GetTagGroupsIdJson200ApplicationJsonTagGroup;
}


export class GetTagGroupsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagGroupsIdJsonPathParams;
}


export class GetTagGroupsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTagGroupsIdJson200ApplicationJsonObject?: GetTagGroupsIdJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

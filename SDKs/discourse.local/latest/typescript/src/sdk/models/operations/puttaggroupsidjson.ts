import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutTagGroupsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTagGroupsIdJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=everyone" })
  everyone?: number;
}


export class PutTagGroupsIdJson200ApplicationJsonTagGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=one_per_topic" })
  onePerTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parent_tag_name" })
  parentTagName?: any[];

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions;

  @SpeakeasyMetadata({ data: "json, name=tag_names" })
  tagNames?: any[];
}


export class PutTagGroupsIdJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;

  @SpeakeasyMetadata({ data: "json, name=tag_group" })
  tagGroup?: PutTagGroupsIdJson200ApplicationJsonTagGroup;
}


export class PutTagGroupsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTagGroupsIdJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutTagGroupsIdJsonRequestBody;
}


export class PutTagGroupsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putTagGroupsIdJson200ApplicationJsonObject?: PutTagGroupsIdJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

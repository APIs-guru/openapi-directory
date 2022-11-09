import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutTagGroupsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTagGroupsIdJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutTagGroupsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTagGroupsIdJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutTagGroupsIdJsonRequestBody;
}


export class PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=everyone" })
  everyone?: number;
}


export class PutTagGroupsIdJson200ApplicationJsonTagGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=one_per_topic" })
  onePerTopic?: boolean;

  @Metadata({ data: "json, name=parent_tag_name" })
  parentTagName?: any[];

  @Metadata({ data: "json, name=permissions" })
  permissions?: PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions;

  @Metadata({ data: "json, name=tag_names" })
  tagNames?: any[];
}


export class PutTagGroupsIdJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: string;

  @Metadata({ data: "json, name=tag_group" })
  tagGroup?: PutTagGroupsIdJson200ApplicationJsonTagGroup;
}


export class PutTagGroupsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putTagGroupsIdJson200ApplicationJsonObject?: PutTagGroupsIdJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}

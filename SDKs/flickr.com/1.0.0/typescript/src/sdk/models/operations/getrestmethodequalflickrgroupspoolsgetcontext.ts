import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;
}


export class GetRestMethodEqualFlickrGroupsPoolsGetContextRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams;
}


export class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonCount;

  @Metadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetRestMethodEqualFlickrGroupsPoolsGetContextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonObject?: GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJson;

  @Metadata()
  statusCode: number;
}

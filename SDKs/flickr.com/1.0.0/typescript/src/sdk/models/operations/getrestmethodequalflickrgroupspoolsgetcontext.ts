import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;
}


export class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonCount;

  @SpeakeasyMetadata({ data: "json, name=nextphoto" })
  nextphoto?: shared.ContextPhoto;

  @SpeakeasyMetadata({ data: "json, name=prevphoto" })
  prevphoto?: shared.ContextPhoto;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetRestMethodEqualFlickrGroupsPoolsGetContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams;
}


export class GetRestMethodEqualFlickrGroupsPoolsGetContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonObject?: GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

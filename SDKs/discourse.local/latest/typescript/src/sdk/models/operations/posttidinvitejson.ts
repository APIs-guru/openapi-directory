import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTIdInviteJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostTIdInviteJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostTIdInviteJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}


export class PostTIdInviteJson200ApplicationJsonUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class PostTIdInviteJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: PostTIdInviteJson200ApplicationJsonUser;
}


export class PostTIdInviteJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTIdInviteJsonPathParams;

  @SpeakeasyMetadata()
  headers: PostTIdInviteJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostTIdInviteJsonRequestBody;
}


export class PostTIdInviteJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postTIdInviteJson200ApplicationJsonObject?: PostTIdInviteJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

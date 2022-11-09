import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTIdInviteJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostTIdInviteJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostTIdInviteJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}


export class PostTIdInviteJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTIdInviteJsonPathParams;

  @Metadata()
  headers: PostTIdInviteJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostTIdInviteJsonRequestBody;
}


export class PostTIdInviteJson200ApplicationJsonUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class PostTIdInviteJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user?: PostTIdInviteJson200ApplicationJsonUser;
}


export class PostTIdInviteJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postTIdInviteJson200ApplicationJsonObject?: PostTIdInviteJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}

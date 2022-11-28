import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUsersJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostUsersJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=user_fields[1]" })
  userFields1?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostUsersJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}


export class PostUsersJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostUsersJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostUsersJsonRequestBody;
}


export class PostUsersJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postUsersJson200ApplicationJsonObject?: PostUsersJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostUsersJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostUsersJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=approved" })
  approved?: boolean;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=user_fields[1]" })
  userFields1?: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostUsersJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostUsersJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostUsersJsonRequestBody;
}


export class PostUsersJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}


export class PostUsersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postUsersJson200ApplicationJsonObject?: PostUsersJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}

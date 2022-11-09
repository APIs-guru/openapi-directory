import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUserSample extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=read_only" })
  readOnly?: boolean;
}


export class PostUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostUserSample;
}


export class PostUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createUserResponse?: shared.CreateUserResponse;

  @Metadata()
  invalidToken?: shared.InvalidToken;
}

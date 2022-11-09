import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostChangePasswordSample extends SpeakeasyBase {
  @Metadata({ data: "json, name=old_password" })
  oldPassword?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}


export class PostChangePasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostChangePasswordSample;
}


export class PostChangePasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;
}

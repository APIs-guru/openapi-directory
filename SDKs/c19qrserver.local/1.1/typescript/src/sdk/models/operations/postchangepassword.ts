import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostChangePasswordSample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=old_password" })
  oldPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}


export class PostChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostChangePasswordSample;
}


export class PostChangePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;
}

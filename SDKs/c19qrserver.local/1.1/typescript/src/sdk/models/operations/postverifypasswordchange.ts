import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVerifyPasswordChangeSample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guid" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}


export class PostVerifyPasswordChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostVerifyPasswordChangeSample;
}


export class PostVerifyPasswordChangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;
}

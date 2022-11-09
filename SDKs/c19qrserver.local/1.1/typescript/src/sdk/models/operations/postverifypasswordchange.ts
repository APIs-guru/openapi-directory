import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVerifyPasswordChangeSample extends SpeakeasyBase {
  @Metadata({ data: "json, name=guid" })
  guid?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}


export class PostVerifyPasswordChangeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostVerifyPasswordChangeSample;
}


export class PostVerifyPasswordChangeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;
}

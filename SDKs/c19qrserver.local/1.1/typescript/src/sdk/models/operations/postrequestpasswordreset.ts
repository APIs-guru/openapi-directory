import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRequestPasswordResetSample extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class PostRequestPasswordResetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostRequestPasswordResetSample;
}


export class PostRequestPasswordResetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;

  @Metadata()
  requestPasswordResetResponse?: shared.RequestPasswordResetResponse;
}

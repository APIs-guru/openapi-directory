import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAuthApiKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AuthenticatePayload;
}


export class PostAuthApiKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessToken?: shared.AccessToken;

  @Metadata()
  badRequest?: shared.BadRequest;
}

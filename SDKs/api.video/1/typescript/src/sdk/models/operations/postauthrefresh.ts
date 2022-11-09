import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAuthRefreshRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RefreshTokenPayload;
}


export class PostAuthRefreshResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessToken?: shared.AccessToken;

  @Metadata()
  badRequest?: shared.BadRequest;
}

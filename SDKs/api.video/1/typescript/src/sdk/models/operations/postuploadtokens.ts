import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUploadTokensSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostUploadTokensRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.TokenCreatePayload;

  @Metadata()
  security: PostUploadTokensSecurity;
}


export class PostUploadTokensResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  uploadToken?: shared.UploadToken;
}

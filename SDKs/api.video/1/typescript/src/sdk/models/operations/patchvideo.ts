import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PatchVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchVideoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.VideoUpdatePayload;

  @Metadata()
  security: PatchVideoSecurity;
}


export class PatchVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  video?: shared.Video;
}

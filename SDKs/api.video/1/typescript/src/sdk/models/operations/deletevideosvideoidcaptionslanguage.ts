import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class DeleteVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideosVideoIdCaptionsLanguagePathParams;

  @Metadata()
  security: DeleteVideosVideoIdCaptionsLanguageSecurity;
}


export class DeleteVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;
}

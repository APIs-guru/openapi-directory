import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class DeleteVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideosVideoIdCaptionsLanguagePathParams;

  @SpeakeasyMetadata()
  security: DeleteVideosVideoIdCaptionsLanguageSecurity;
}


export class DeleteVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}

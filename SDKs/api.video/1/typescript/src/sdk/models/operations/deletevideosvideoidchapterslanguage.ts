import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class DeleteVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideosVideoIdChaptersLanguagePathParams;

  @SpeakeasyMetadata()
  security: DeleteVideosVideoIdChaptersLanguageSecurity;
}


export class DeleteVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}

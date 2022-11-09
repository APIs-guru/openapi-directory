import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class DeleteVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideosVideoIdChaptersLanguagePathParams;

  @Metadata()
  security: DeleteVideosVideoIdChaptersLanguageSecurity;
}


export class DeleteVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;
}

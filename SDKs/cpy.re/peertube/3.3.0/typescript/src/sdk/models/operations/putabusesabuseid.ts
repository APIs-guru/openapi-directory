import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAbusesAbuseIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;
}


export class PutAbusesAbuseIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=moderationComment" })
  moderationComment?: string;

  @Metadata({ data: "json, name=state" })
  state?: number;
}


export class PutAbusesAbuseIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutAbusesAbuseIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAbusesAbuseIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutAbusesAbuseIdRequestBody;

  @Metadata()
  security: PutAbusesAbuseIdSecurity;
}


export class PutAbusesAbuseIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

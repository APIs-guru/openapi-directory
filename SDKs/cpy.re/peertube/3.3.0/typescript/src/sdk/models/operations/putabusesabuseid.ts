import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAbusesAbuseIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;
}


export class PutAbusesAbuseIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=moderationComment" })
  moderationComment?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: number;
}


export class PutAbusesAbuseIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutAbusesAbuseIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAbusesAbuseIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutAbusesAbuseIdRequestBody;

  @SpeakeasyMetadata()
  security: PutAbusesAbuseIdSecurity;
}


export class PutAbusesAbuseIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

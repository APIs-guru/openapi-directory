import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAbusesAbuseIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;
}


export class DeleteAbusesAbuseIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteAbusesAbuseIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAbusesAbuseIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteAbusesAbuseIdSecurity;
}


export class DeleteAbusesAbuseIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

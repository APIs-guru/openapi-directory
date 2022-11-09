import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAbusesAbuseIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;
}


export class DeleteAbusesAbuseIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteAbusesAbuseIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAbusesAbuseIdPathParams;

  @Metadata()
  security: DeleteAbusesAbuseIdSecurity;
}


export class DeleteAbusesAbuseIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

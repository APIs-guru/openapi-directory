import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseMessageId" })
  abuseMessageId: number;
}


export class DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity;
}


export class DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=abuseMessageId" })
  abuseMessageId: number;
}


export class DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams;

  @Metadata()
  security: DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity;
}


export class DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

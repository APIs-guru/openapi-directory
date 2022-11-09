import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAbusesAbuseIdMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;
}


export class GetAbusesAbuseIdMessagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAbusesAbuseIdMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAbusesAbuseIdMessagesPathParams;

  @Metadata()
  security: GetAbusesAbuseIdMessagesSecurity;
}


export class GetAbusesAbuseIdMessages200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetAbusesAbuseIdMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAbusesAbuseIdMessages200ApplicationJsonObject?: GetAbusesAbuseIdMessages200ApplicationJson;

  @Metadata()
  statusCode: number;
}

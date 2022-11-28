import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAbusesAbuseIdMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" })
  abuseId: number;
}


export class GetAbusesAbuseIdMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAbusesAbuseIdMessages200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetAbusesAbuseIdMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAbusesAbuseIdMessagesPathParams;

  @SpeakeasyMetadata()
  security: GetAbusesAbuseIdMessagesSecurity;
}


export class GetAbusesAbuseIdMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAbusesAbuseIdMessages200ApplicationJsonObject?: GetAbusesAbuseIdMessages200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

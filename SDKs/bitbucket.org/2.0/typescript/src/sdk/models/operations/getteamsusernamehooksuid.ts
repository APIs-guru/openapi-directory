import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsUsernameHooksUidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernameHooksUidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetTeamsUsernameHooksUidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsUsernameHooksUidPathParams;

  @SpeakeasyMetadata()
  security: GetTeamsUsernameHooksUidSecurity;
}


export class GetTeamsUsernameHooksUidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  webhookSubscription?: Map<string, any>;
}

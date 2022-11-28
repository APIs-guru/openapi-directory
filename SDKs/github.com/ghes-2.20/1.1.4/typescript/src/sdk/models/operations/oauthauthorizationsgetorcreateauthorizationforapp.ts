import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=note_url" })
  noteUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody;
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}

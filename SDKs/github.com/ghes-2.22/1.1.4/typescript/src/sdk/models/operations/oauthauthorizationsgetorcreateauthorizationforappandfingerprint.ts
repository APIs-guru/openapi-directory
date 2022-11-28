import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=note_url" })
  noteUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody;
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}

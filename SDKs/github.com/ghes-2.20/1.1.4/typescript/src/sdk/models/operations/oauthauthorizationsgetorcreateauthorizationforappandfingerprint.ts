import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=note_url" })
  noteUrl?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody;
}


export class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorization?: shared.Authorization;

  @Metadata()
  validationError?: shared.ValidationError;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountUpdatePrefsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefs" })
  prefs: Map<string, any>;
}


export class AccountUpdatePrefsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountUpdatePrefsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AccountUpdatePrefsRequestBody;

  @SpeakeasyMetadata()
  security: AccountUpdatePrefsSecurity;
}


export class AccountUpdatePrefsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}

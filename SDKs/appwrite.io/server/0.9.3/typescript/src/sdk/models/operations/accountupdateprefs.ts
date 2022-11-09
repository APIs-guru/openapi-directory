import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountUpdatePrefsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=prefs" })
  prefs: Map<string, any>;
}


export class AccountUpdatePrefsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountUpdatePrefsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AccountUpdatePrefsRequestBody;

  @Metadata()
  security: AccountUpdatePrefsSecurity;
}


export class AccountUpdatePrefsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;
}

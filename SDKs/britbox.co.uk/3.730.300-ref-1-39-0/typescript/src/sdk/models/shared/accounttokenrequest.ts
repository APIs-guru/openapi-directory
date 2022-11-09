import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountTokenRequestCookieTypeEnum {
    Session = "Session"
,    Persistent = "Persistent"
}

export enum AccountTokenRequestScopesEnum {
    Catalog = "Catalog"
,    Commerce = "Commerce"
,    Settings = "Settings"
,    Playback = "Playback"
}


export class AccountTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookieType" })
  cookieType?: AccountTokenRequestCookieTypeEnum;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=scopes" })
  scopes: AccountTokenRequestScopesEnum[];
}

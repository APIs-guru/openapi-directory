import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountTokenRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}

export enum AccountTokenRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}


export class AccountTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookieType" })
  cookieType?: AccountTokenRequestCookieTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: AccountTokenRequestScopesEnum[];
}

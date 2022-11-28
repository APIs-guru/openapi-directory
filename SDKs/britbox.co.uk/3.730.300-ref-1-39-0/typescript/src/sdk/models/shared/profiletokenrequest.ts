import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProfileTokenRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}

export enum ProfileTokenRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings"
}


export class ProfileTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookieType" })
  cookieType?: ProfileTokenRequestCookieTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: ProfileTokenRequestScopesEnum[];
}

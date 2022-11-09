import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProfileTokenRequestCookieTypeEnum {
    Session = "Session"
,    Persistent = "Persistent"
}

export enum ProfileTokenRequestScopesEnum {
    Catalog = "Catalog"
,    Commerce = "Commerce"
,    Settings = "Settings"
}


export class ProfileTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookieType" })
  cookieType?: ProfileTokenRequestCookieTypeEnum;

  @Metadata({ data: "json, name=pin" })
  pin?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId: string;

  @Metadata({ data: "json, name=scopes" })
  scopes: ProfileTokenRequestScopesEnum[];
}

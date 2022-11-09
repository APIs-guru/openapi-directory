import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ItvPinAuthRequestCookieTypeEnum {
    Session = "Session"
,    Persistent = "Persistent"
}

export enum ItvPinAuthRequestScopesEnum {
    Catalog = "Catalog"
,    Commerce = "Commerce"
,    Settings = "Settings"
,    Playback = "Playback"
}


export class ItvPinAuthRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookieType" })
  cookieType?: ItvPinAuthRequestCookieTypeEnum;

  @Metadata({ data: "json, name=pin" })
  pin: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: ItvPinAuthRequestScopesEnum[];
}

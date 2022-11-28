import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ItvPinAuthRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}

export enum ItvPinAuthRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}


export class ItvPinAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookieType" })
  cookieType?: ItvPinAuthRequestCookieTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: ItvPinAuthRequestScopesEnum[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SingleSignOnRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}

export enum SingleSignOnRequestProviderEnum {
    Facebook = "Facebook"
}

export enum SingleSignOnRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}


export class SingleSignOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookieType" })
  cookieType?: SingleSignOnRequestCookieTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=linkAccounts" })
  linkAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: SingleSignOnRequestProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: SingleSignOnRequestScopesEnum[];

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}

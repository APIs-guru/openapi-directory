import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SingleSignOnRequestCookieTypeEnum {
    Session = "Session"
,    Persistent = "Persistent"
}

export enum SingleSignOnRequestProviderEnum {
    Facebook = "Facebook"
}

export enum SingleSignOnRequestScopesEnum {
    Catalog = "Catalog"
,    Commerce = "Commerce"
,    Settings = "Settings"
,    Playback = "Playback"
}


export class SingleSignOnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookieType" })
  cookieType?: SingleSignOnRequestCookieTypeEnum;

  @Metadata({ data: "json, name=linkAccounts" })
  linkAccounts?: boolean;

  @Metadata({ data: "json, name=provider" })
  provider: SingleSignOnRequestProviderEnum;

  @Metadata({ data: "json, name=scopes" })
  scopes?: SingleSignOnRequestScopesEnum[];

  @Metadata({ data: "json, name=token" })
  token: string;
}

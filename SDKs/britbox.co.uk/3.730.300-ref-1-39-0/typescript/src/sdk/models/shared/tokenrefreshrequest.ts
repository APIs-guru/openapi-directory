import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TokenRefreshRequestCookieTypeEnum {
    Session = "Session"
,    Persistent = "Persistent"
}


export class TokenRefreshRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookieType" })
  cookieType?: TokenRefreshRequestCookieTypeEnum;

  @Metadata({ data: "json, name=token" })
  token: string;
}

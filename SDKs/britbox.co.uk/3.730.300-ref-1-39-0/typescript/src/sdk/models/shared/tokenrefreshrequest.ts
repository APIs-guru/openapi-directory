import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TokenRefreshRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}


export class TokenRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookieType" })
  cookieType?: TokenRefreshRequestCookieTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}

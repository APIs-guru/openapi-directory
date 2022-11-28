import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RefreshTokenGrantTypeEnum {
    RefreshToken = "refresh_token"
}


export class RefreshToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: RefreshTokenGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken: string;
}

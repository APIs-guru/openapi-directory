import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RefreshTokenGrantTypeEnum {
    RefreshToken = "refresh_token"
}


export class RefreshToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @Metadata({ data: "json, name=grant_type" })
  grantType: RefreshTokenGrantTypeEnum;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken: string;
}

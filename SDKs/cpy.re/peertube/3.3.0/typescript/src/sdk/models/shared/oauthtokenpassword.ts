import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OAuthTokenPasswordGrantTypeEnum {
    Password = "password"
,    RefreshToken = "refresh_token"
}


export class OAuthTokenPassword extends SpeakeasyBase {
  @Metadata({ data: "form, name=client_id;" })
  clientId: string;

  @Metadata({ data: "form, name=client_secret;" })
  clientSecret: string;

  @Metadata({ data: "form, name=grant_type;" })
  grantType: OAuthTokenPasswordGrantTypeEnum;

  @Metadata({ data: "form, name=password;" })
  password: string;

  @Metadata({ data: "form, name=username;" })
  username: string;
}

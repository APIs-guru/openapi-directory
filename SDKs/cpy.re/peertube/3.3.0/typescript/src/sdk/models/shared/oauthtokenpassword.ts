import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OAuthTokenPasswordGrantTypeEnum {
    Password = "password",
    RefreshToken = "refresh_token"
}


export class OAuthTokenPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType: OAuthTokenPasswordGrantTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=password;" })
  password: string;

  @SpeakeasyMetadata({ data: "form, name=username;" })
  username: string;
}

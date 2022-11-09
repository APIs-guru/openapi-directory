import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType?: string;
}

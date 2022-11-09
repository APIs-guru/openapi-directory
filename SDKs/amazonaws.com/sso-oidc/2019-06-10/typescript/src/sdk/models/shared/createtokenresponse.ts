import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @Metadata({ data: "json, name=tokenType" })
  tokenType?: string;
}

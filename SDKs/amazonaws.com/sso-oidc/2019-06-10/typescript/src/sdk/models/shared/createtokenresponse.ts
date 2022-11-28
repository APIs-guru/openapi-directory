import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenType" })
  tokenType?: string;
}

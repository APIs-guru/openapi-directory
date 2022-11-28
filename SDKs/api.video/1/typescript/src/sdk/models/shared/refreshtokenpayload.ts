import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RefreshTokenPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken: string;
}

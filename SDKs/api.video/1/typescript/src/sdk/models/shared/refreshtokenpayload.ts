import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RefreshTokenPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=refreshToken" })
  refreshToken: string;
}

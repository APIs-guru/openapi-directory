import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EeCreateTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=tokenType" })
  tokenType?: string;
}

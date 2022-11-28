import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartDeviceAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceCode" })
  deviceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=userCode" })
  userCode?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationUri" })
  verificationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationUriComplete" })
  verificationUriComplete?: string;
}

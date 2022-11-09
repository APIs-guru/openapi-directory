import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartDeviceAuthorizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceCode" })
  deviceCode?: string;

  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @Metadata({ data: "json, name=interval" })
  interval?: number;

  @Metadata({ data: "json, name=userCode" })
  userCode?: string;

  @Metadata({ data: "json, name=verificationUri" })
  verificationUri?: string;

  @Metadata({ data: "json, name=verificationUriComplete" })
  verificationUriComplete?: string;
}

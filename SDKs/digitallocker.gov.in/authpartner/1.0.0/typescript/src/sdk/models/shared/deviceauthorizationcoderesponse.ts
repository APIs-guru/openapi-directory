import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceAuthorizationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_code" })
  deviceCode: string;

  @SpeakeasyMetadata({ data: "json, name=dl_masked_email" })
  dlMaskedEmail: string;

  @SpeakeasyMetadata({ data: "json, name=dl_masked_mobile" })
  dlMaskedMobile: number;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn: number;
}

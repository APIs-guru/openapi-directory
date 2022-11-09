import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceAuthorizationCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_code" })
  deviceCode: string;

  @Metadata({ data: "json, name=dl_masked_email" })
  dlMaskedEmail: string;

  @Metadata({ data: "json, name=dl_masked_mobile" })
  dlMaskedMobile: number;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn: number;
}

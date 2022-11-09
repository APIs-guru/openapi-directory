import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForgetWiFiNetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=wpa_id" })
  wpaId: number;
}

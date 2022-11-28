import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForgetpaireddeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bond" })
  bond: boolean;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress: string;
}

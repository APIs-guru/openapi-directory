import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForgetpaireddeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bond" })
  bond: boolean;

  @Metadata({ data: "json, name=mac_address" })
  macAddress: string;
}

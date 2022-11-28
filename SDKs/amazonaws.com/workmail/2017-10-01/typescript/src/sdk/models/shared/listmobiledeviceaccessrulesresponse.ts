import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRule } from "./mobiledeviceaccessrule";



export class ListMobileDeviceAccessRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: MobileDeviceAccessRule })
  rules?: MobileDeviceAccessRule[];
}

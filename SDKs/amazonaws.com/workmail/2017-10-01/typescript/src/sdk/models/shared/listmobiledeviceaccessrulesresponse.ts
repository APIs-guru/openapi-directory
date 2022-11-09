import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MobileDeviceAccessRule } from "./mobiledeviceaccessrule";


export class ListMobileDeviceAccessRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rules", elemType: shared.MobileDeviceAccessRule })
  rules?: MobileDeviceAccessRule[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
import { MobileDeviceAccessMatchedRule } from "./mobiledeviceaccessmatchedrule";



export class GetMobileDeviceAccessEffectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Effect" })
  effect?: MobileDeviceAccessRuleEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=MatchedRules", elemType: MobileDeviceAccessMatchedRule })
  matchedRules?: MobileDeviceAccessMatchedRule[];
}

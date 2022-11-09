import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
import { MobileDeviceAccessMatchedRule } from "./mobiledeviceaccessmatchedrule";


export class GetMobileDeviceAccessEffectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Effect" })
  effect?: MobileDeviceAccessRuleEffectEnum;

  @Metadata({ data: "json, name=MatchedRules", elemType: shared.MobileDeviceAccessMatchedRule })
  matchedRules?: MobileDeviceAccessMatchedRule[];
}

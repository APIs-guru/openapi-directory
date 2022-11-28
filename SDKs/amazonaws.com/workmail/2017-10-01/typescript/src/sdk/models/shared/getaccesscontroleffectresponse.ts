import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";



export class GetAccessControlEffectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Effect" })
  effect?: AccessControlRuleEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=MatchedRules" })
  matchedRules?: string[];
}

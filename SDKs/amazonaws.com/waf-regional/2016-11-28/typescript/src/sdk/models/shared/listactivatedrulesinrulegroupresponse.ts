import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivatedRule } from "./activatedrule";



export class ListActivatedRulesInRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivatedRules", elemType: ActivatedRule })
  activatedRules?: ActivatedRule[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}

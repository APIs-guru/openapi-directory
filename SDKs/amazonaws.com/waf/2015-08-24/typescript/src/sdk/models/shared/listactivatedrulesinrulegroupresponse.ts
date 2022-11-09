import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActivatedRule } from "./activatedrule";


export class ListActivatedRulesInRuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivatedRules", elemType: shared.ActivatedRule })
  activatedRules?: ActivatedRule[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}

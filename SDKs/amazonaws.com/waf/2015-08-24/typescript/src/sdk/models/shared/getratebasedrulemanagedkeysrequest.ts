import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRateBasedRuleManagedKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=RuleId" })
  ruleId: string;
}

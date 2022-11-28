import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRateBasedRuleManagedKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSummary } from "./rulesummary";



export class ListRateBasedRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: RuleSummary })
  rules?: RuleSummary[];
}

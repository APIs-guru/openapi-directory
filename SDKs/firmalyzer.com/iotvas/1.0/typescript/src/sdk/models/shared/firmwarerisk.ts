import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RiskSummary } from "./risksummary";
import { VulnerableComponent } from "./vulnerablecomponent";



export class FirmwareRisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=risk_summary" })
  riskSummary?: RiskSummary;

  @SpeakeasyMetadata({ data: "json, name=vulnerable_components", elemType: VulnerableComponent })
  vulnerableComponents?: VulnerableComponent[];
}

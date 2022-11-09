import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RiskSummary } from "./risksummary";
import { VulnerableComponent } from "./vulnerablecomponent";


export class FirmwareRisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=risk_summary" })
  riskSummary?: RiskSummary;

  @Metadata({ data: "json, name=vulnerable_components", elemType: shared.VulnerableComponent })
  vulnerableComponents?: VulnerableComponent[];
}

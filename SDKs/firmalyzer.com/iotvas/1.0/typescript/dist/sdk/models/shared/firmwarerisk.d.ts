import { SpeakeasyBase } from "../../../internal/utils";
import { RiskSummary } from "./risksummary";
import { VulnerableComponent } from "./vulnerablecomponent";
export declare class FirmwareRisk extends SpeakeasyBase {
    riskSummary?: RiskSummary;
    vulnerableComponents?: VulnerableComponent[];
}

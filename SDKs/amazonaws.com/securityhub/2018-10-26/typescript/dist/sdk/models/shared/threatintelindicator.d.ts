import { SpeakeasyBase } from "../../../internal/utils";
import { ThreatIntelIndicatorCategoryEnum } from "./threatintelindicatorcategoryenum";
import { ThreatIntelIndicatorTypeEnum } from "./threatintelindicatortypeenum";
/**
 * Details about the threat intelligence related to a finding.
**/
export declare class ThreatIntelIndicator extends SpeakeasyBase {
    category?: ThreatIntelIndicatorCategoryEnum;
    lastObservedAt?: string;
    source?: string;
    sourceUrl?: string;
    type?: ThreatIntelIndicatorTypeEnum;
    value?: string;
}

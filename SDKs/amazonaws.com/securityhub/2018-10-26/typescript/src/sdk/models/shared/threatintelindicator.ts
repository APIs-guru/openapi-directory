import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThreatIntelIndicatorCategoryEnum } from "./threatintelindicatorcategoryenum";
import { ThreatIntelIndicatorTypeEnum } from "./threatintelindicatortypeenum";



// ThreatIntelIndicator
/** 
 * Details about the threat intelligence related to a finding.
**/
export class ThreatIntelIndicator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: ThreatIntelIndicatorCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=LastObservedAt" })
  lastObservedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ThreatIntelIndicatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThreatIntelIndicatorCategoryEnum } from "./threatintelindicatorcategoryenum";
import { ThreatIntelIndicatorTypeEnum } from "./threatintelindicatortypeenum";


// ThreatIntelIndicator
/** 
 * Details about the threat intelligence related to a finding.
**/
export class ThreatIntelIndicator extends SpeakeasyBase {
  @Metadata({ data: "json, name=Category" })
  category?: ThreatIntelIndicatorCategoryEnum;

  @Metadata({ data: "json, name=LastObservedAt" })
  lastObservedAt?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=SourceUrl" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ThreatIntelIndicatorTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionContribution } from "./dimensioncontribution";



// ContributionMatrix
/** 
 * Details about dimensions that contributed to an anomaly.
**/
export class ContributionMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DimensionContributionList", elemType: DimensionContribution })
  dimensionContributionList?: DimensionContribution[];
}

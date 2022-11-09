import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionContribution } from "./dimensioncontribution";


// ContributionMatrix
/** 
 * Details about dimensions that contributed to an anomaly.
**/
export class ContributionMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=DimensionContributionList", elemType: shared.DimensionContribution })
  dimensionContributionList?: DimensionContribution[];
}

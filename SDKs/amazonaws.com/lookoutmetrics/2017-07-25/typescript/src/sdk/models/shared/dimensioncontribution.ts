import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValueContribution } from "./dimensionvaluecontribution";



// DimensionContribution
/** 
 * Details about a dimension that contributed to an anomaly.
**/
export class DimensionContribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=DimensionValueContributionList", elemType: DimensionValueContribution })
  dimensionValueContributionList?: DimensionValueContribution[];
}

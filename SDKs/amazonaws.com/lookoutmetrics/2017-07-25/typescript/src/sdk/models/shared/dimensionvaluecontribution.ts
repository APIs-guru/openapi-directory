import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionValueContribution
/** 
 * The severity of a value of a dimension that contributed to an anomaly.
**/
export class DimensionValueContribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContributionScore" })
  contributionScore?: number;

  @SpeakeasyMetadata({ data: "json, name=DimensionValue" })
  dimensionValue?: string;
}

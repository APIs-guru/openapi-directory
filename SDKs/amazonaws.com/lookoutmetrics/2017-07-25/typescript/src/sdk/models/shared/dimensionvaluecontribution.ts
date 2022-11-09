import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionValueContribution
/** 
 * The severity of a value of a dimension that contributed to an anomaly.
**/
export class DimensionValueContribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContributionScore" })
  contributionScore?: number;

  @Metadata({ data: "json, name=DimensionValue" })
  dimensionValue?: string;
}

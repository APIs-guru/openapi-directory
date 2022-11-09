import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValueContribution } from "./dimensionvaluecontribution";


// DimensionContribution
/** 
 * Details about a dimension that contributed to an anomaly.
**/
export class DimensionContribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=DimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=DimensionValueContributionList", elemType: shared.DimensionValueContribution })
  dimensionValueContributionList?: DimensionValueContribution[];
}

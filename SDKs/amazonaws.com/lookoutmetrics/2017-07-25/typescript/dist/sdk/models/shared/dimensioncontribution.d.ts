import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValueContribution } from "./dimensionvaluecontribution";
/**
 * Details about a dimension that contributed to an anomaly.
**/
export declare class DimensionContribution extends SpeakeasyBase {
    dimensionName?: string;
    dimensionValueContributionList?: DimensionValueContribution[];
}

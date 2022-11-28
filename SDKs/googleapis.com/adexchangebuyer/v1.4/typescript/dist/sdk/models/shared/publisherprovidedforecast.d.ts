import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * This message carries publisher provided forecasting information.
**/
export declare class PublisherProvidedForecast extends SpeakeasyBase {
    dimensions?: Dimension[];
    weeklyImpressions?: string;
    weeklyUniques?: string;
}

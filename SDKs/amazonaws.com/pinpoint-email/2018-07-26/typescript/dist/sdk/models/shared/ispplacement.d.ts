import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementStatistics } from "./placementstatistics";
/**
 * An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.
**/
export declare class IspPlacement extends SpeakeasyBase {
    ispName?: string;
    placementStatistics?: PlacementStatistics;
}

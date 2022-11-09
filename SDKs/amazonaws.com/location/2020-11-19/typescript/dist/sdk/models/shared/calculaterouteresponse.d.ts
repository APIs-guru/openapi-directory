import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Leg } from "./leg";
import { CalculateRouteSummary } from "./calculateroutesummary";
/**
 * Returns the result of the route calculation. Metadata includes legs and route summary.
**/
export declare class CalculateRouteResponse extends SpeakeasyBase {
    legs: Leg[];
    summary: CalculateRouteSummary;
}

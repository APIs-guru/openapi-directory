import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Leg } from "./leg";
import { CalculateRouteSummary } from "./calculateroutesummary";



// CalculateRouteResponse
/** 
 * Returns the result of the route calculation. Metadata includes legs and route summary.
**/
export class CalculateRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Legs", elemType: Leg })
  legs: Leg[];

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary: CalculateRouteSummary;
}

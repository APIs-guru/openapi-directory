import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Leg } from "./leg";
import { CalculateRouteSummary } from "./calculateroutesummary";


// CalculateRouteResponse
/** 
 * Returns the result of the route calculation. Metadata includes legs and route summary.
**/
export class CalculateRouteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Legs", elemType: shared.Leg })
  legs: Leg[];

  @Metadata({ data: "json, name=Summary" })
  summary: CalculateRouteSummary;
}

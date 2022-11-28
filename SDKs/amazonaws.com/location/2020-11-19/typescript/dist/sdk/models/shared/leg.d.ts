import { SpeakeasyBase } from "../../../internal/utils";
import { LegGeometry } from "./leggeometry";
import { Step } from "./step";
/**
 * <p>Contains the calculated route's details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request. </p> <p>For example, a route with a departure position and destination position returns one leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">snapped to a nearby road</a>:</p> <ul> <li> <p>The <code>StartPosition</code> is the departure position.</p> </li> <li> <p>The <code>EndPosition</code> is the destination position.</p> </li> </ul> <p>A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:</p> <ul> <li> <p>Leg 1: The <code>StartPosition</code> is the departure position . The <code>EndPosition</code> is the waypoint positon.</p> </li> <li> <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The <code>EndPosition</code> is the destination position.</p> </li> </ul>
**/
export declare class Leg extends SpeakeasyBase {
    distance: number;
    durationSeconds: number;
    endPosition: number[];
    geometry?: LegGeometry;
    startPosition: number[];
    steps: Step[];
}

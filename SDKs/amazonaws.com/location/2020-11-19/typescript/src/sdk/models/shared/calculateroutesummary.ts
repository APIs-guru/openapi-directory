import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistanceUnitEnum } from "./distanceunitenum";


// CalculateRouteSummary
/** 
 * A summary of the calculated route.
**/
export class CalculateRouteSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSource" })
  dataSource: string;

  @Metadata({ data: "json, name=Distance" })
  distance: number;

  @Metadata({ data: "json, name=DistanceUnit" })
  distanceUnit: DistanceUnitEnum;

  @Metadata({ data: "json, name=DurationSeconds" })
  durationSeconds: number;

  @Metadata({ data: "json, name=RouteBBox" })
  routeBBox: number[];
}

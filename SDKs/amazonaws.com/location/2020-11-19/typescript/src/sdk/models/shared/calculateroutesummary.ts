import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistanceUnitEnum } from "./distanceunitenum";



// CalculateRouteSummary
/** 
 * A summary of the calculated route.
**/
export class CalculateRouteSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: string;

  @SpeakeasyMetadata({ data: "json, name=Distance" })
  distance: number;

  @SpeakeasyMetadata({ data: "json, name=DistanceUnit" })
  distanceUnit: DistanceUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=DurationSeconds" })
  durationSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=RouteBBox" })
  routeBBox: number[];
}

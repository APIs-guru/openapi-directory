import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeDuration
/** 
 * A complex type that specifies a period of time using a specified time-measurement unit.
**/
export class TimeDuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

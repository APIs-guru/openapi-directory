import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeDuration
/** 
 * A complex type that specifies a period of time using a specified time-measurement unit.
**/
export class TimeDuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}

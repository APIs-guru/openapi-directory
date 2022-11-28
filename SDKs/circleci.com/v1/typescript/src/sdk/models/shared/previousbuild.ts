import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// PreviousBuild
/** 
 * previous build
**/
export class PreviousBuild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_num" })
  buildNum?: number;

  @SpeakeasyMetadata({ data: "json, name=build_time_millis" })
  buildTimeMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusEnum;
}

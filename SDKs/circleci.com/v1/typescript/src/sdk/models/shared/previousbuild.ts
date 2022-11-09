import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


// PreviousBuild
/** 
 * previous build
**/
export class PreviousBuild extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_num" })
  buildNum?: number;

  @Metadata({ data: "json, name=build_time_millis" })
  buildTimeMillis?: number;

  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;
}

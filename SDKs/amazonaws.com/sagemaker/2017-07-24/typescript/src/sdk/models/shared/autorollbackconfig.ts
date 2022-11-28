import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";



// AutoRollbackConfig
/** 
 * Currently, the <code>AutoRollbackConfig</code> API is not supported.
**/
export class AutoRollbackConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alarms", elemType: Alarm })
  alarms?: Alarm[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alarm } from "./alarm";


// AutoRollbackConfig
/** 
 * Currently, the <code>AutoRollbackConfig</code> API is not supported.
**/
export class AutoRollbackConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alarms", elemType: shared.Alarm })
  alarms?: Alarm[];
}

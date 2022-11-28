import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TracingModeEnum } from "./tracingmodeenum";



// TracingConfigResponse
/** 
 * The function's X-Ray tracing configuration.
**/
export class TracingConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: TracingModeEnum;
}

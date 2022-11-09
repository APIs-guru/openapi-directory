import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TracingModeEnum } from "./tracingmodeenum";


// TracingConfigResponse
/** 
 * The function's X-Ray tracing configuration.
**/
export class TracingConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mode" })
  mode?: TracingModeEnum;
}

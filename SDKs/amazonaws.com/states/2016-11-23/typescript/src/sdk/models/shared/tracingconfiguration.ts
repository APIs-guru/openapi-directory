import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TracingConfiguration
/** 
 * Selects whether or not the state machine's AWS X-Ray tracing is enabled. Default is <code>false</code> 
**/
export class TracingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}

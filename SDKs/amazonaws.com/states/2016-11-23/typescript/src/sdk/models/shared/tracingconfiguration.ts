import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TracingConfiguration
/** 
 * Selects whether or not the state machine's AWS X-Ray tracing is enabled. Default is <code>false</code> 
**/
export class TracingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}

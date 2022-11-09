import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AsyncInferenceClientConfig } from "./asyncinferenceclientconfig";
import { AsyncInferenceOutputConfig } from "./asyncinferenceoutputconfig";


// AsyncInferenceConfig
/** 
 * Specifies configuration for how an endpoint performs asynchronous inference.
**/
export class AsyncInferenceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientConfig" })
  clientConfig?: AsyncInferenceClientConfig;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: AsyncInferenceOutputConfig;
}

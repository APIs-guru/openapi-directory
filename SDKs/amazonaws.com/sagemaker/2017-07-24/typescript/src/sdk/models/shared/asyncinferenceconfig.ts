import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceClientConfig } from "./asyncinferenceclientconfig";
import { AsyncInferenceOutputConfig } from "./asyncinferenceoutputconfig";



// AsyncInferenceConfig
/** 
 * Specifies configuration for how an endpoint performs asynchronous inference.
**/
export class AsyncInferenceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientConfig" })
  clientConfig?: AsyncInferenceClientConfig;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: AsyncInferenceOutputConfig;
}

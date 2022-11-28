import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelClientConfig
/** 
 * Configures the timeout and maximum number of retries for processing a transform job invocation.
**/
export class ModelClientConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvocationsMaxRetries" })
  invocationsMaxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=InvocationsTimeoutInSeconds" })
  invocationsTimeoutInSeconds?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelClientConfig
/** 
 * Configures the timeout and maximum number of retries for processing a transform job invocation.
**/
export class ModelClientConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvocationsMaxRetries" })
  invocationsMaxRetries?: number;

  @Metadata({ data: "json, name=InvocationsTimeoutInSeconds" })
  invocationsTimeoutInSeconds?: number;
}

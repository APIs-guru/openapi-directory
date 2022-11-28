import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceClientConfig } from "./asyncinferenceclientconfig";
import { AsyncInferenceOutputConfig } from "./asyncinferenceoutputconfig";
/**
 * Specifies configuration for how an endpoint performs asynchronous inference.
**/
export declare class AsyncInferenceConfig extends SpeakeasyBase {
    clientConfig?: AsyncInferenceClientConfig;
    outputConfig: AsyncInferenceOutputConfig;
}

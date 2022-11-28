import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsLambdaFunctionTracingConfig
/** 
 * The function's X-Ray tracing configuration.
**/
export class AwsLambdaFunctionTracingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: string;
}

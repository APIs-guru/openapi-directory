import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsLambdaFunctionTracingConfig
/** 
 * The function's X-Ray tracing configuration.
**/
export class AwsLambdaFunctionTracingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mode" })
  mode?: string;
}

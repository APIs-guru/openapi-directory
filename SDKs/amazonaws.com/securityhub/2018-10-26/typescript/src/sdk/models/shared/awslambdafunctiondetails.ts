import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsLambdaFunctionCode } from "./awslambdafunctioncode";
import { AwsLambdaFunctionDeadLetterConfig } from "./awslambdafunctiondeadletterconfig";
import { AwsLambdaFunctionEnvironment } from "./awslambdafunctionenvironment";
import { AwsLambdaFunctionLayer } from "./awslambdafunctionlayer";
import { AwsLambdaFunctionTracingConfig } from "./awslambdafunctiontracingconfig";
import { AwsLambdaFunctionVpcConfig } from "./awslambdafunctionvpcconfig";



// AwsLambdaFunctionDetails
/** 
 * Details about a function's configuration.
**/
export class AwsLambdaFunctionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: AwsLambdaFunctionCode;

  @SpeakeasyMetadata({ data: "json, name=CodeSha256" })
  codeSha256?: string;

  @SpeakeasyMetadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: AwsLambdaFunctionEnvironment;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Handler" })
  handler?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=Layers", elemType: AwsLambdaFunctionLayer })
  layers?: AwsLambdaFunctionLayer[];

  @SpeakeasyMetadata({ data: "json, name=MasterArn" })
  masterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Runtime" })
  runtime?: string;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=TracingConfig" })
  tracingConfig?: AwsLambdaFunctionTracingConfig;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: AwsLambdaFunctionVpcConfig;
}

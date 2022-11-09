import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Code" })
  code?: AwsLambdaFunctionCode;

  @Metadata({ data: "json, name=CodeSha256" })
  codeSha256?: string;

  @Metadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  @Metadata({ data: "json, name=Environment" })
  environment?: AwsLambdaFunctionEnvironment;

  @Metadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @Metadata({ data: "json, name=Handler" })
  handler?: string;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=Layers", elemType: shared.AwsLambdaFunctionLayer })
  layers?: AwsLambdaFunctionLayer[];

  @Metadata({ data: "json, name=MasterArn" })
  masterArn?: string;

  @Metadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Runtime" })
  runtime?: string;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=TracingConfig" })
  tracingConfig?: AwsLambdaFunctionTracingConfig;

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: AwsLambdaFunctionVpcConfig;
}

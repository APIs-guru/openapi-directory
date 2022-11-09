import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerDefinition } from "./containerdefinition";
import { InferenceExecutionConfig } from "./inferenceexecutionconfig";
import { ContainerDefinition } from "./containerdefinition";
import { VpcConfig } from "./vpcconfig";


export class DescribeModelOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Containers", elemType: shared.ContainerDefinition })
  containers?: ContainerDefinition[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=InferenceExecutionConfig" })
  inferenceExecutionConfig?: InferenceExecutionConfig;

  @Metadata({ data: "json, name=ModelArn" })
  modelArn: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=PrimaryContainer" })
  primaryContainer?: ContainerDefinition;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}

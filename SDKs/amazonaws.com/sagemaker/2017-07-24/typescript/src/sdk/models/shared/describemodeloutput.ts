import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerDefinition } from "./containerdefinition";
import { InferenceExecutionConfig } from "./inferenceexecutionconfig";
import { VpcConfig } from "./vpcconfig";



export class DescribeModelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Containers", elemType: ContainerDefinition })
  containers?: ContainerDefinition[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceExecutionConfig" })
  inferenceExecutionConfig?: InferenceExecutionConfig;

  @SpeakeasyMetadata({ data: "json, name=ModelArn" })
  modelArn: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryContainer" })
  primaryContainer?: ContainerDefinition;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}

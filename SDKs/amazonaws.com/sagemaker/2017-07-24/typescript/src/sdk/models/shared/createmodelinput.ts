import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerDefinition } from "./containerdefinition";
import { InferenceExecutionConfig } from "./inferenceexecutionconfig";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";



export class CreateModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Containers", elemType: ContainerDefinition })
  containers?: ContainerDefinition[];

  @SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceExecutionConfig" })
  inferenceExecutionConfig?: InferenceExecutionConfig;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryContainer" })
  primaryContainer?: ContainerDefinition;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}

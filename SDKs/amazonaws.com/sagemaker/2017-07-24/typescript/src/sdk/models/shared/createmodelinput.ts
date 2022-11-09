import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerDefinition } from "./containerdefinition";
import { InferenceExecutionConfig } from "./inferenceexecutionconfig";
import { ContainerDefinition } from "./containerdefinition";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";


export class CreateModelInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Containers", elemType: shared.ContainerDefinition })
  containers?: ContainerDefinition[];

  @Metadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=InferenceExecutionConfig" })
  inferenceExecutionConfig?: InferenceExecutionConfig;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=PrimaryContainer" })
  primaryContainer?: ContainerDefinition;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}

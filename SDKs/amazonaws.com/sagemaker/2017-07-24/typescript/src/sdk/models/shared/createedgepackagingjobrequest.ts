import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { Tag } from "./tag";



export class CreateEdgePackagingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;

  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion: string;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: EdgeOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=ResourceKey" })
  resourceKey?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}

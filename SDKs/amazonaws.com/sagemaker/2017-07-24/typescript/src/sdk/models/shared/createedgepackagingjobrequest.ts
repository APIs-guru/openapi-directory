import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { Tag } from "./tag";


export class CreateEdgePackagingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;

  @Metadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion: string;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: EdgeOutputConfig;

  @Metadata({ data: "json, name=ResourceKey" })
  resourceKey?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}

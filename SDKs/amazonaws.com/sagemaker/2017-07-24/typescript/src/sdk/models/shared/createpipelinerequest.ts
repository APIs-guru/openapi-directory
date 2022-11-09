import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreatePipelineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=PipelineDefinition" })
  pipelineDefinition: string;

  @Metadata({ data: "json, name=PipelineDescription" })
  pipelineDescription?: string;

  @Metadata({ data: "json, name=PipelineDisplayName" })
  pipelineDisplayName?: string;

  @Metadata({ data: "json, name=PipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}

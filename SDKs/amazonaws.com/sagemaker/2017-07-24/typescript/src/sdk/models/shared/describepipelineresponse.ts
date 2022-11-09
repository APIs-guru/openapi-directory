import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { UserContext } from "./usercontext";
import { PipelineStatusEnum } from "./pipelinestatusenum";


export class DescribePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=LastRunTime" })
  lastRunTime?: Date;

  @Metadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;

  @Metadata({ data: "json, name=PipelineDefinition" })
  pipelineDefinition?: string;

  @Metadata({ data: "json, name=PipelineDescription" })
  pipelineDescription?: string;

  @Metadata({ data: "json, name=PipelineDisplayName" })
  pipelineDisplayName?: string;

  @Metadata({ data: "json, name=PipelineName" })
  pipelineName?: string;

  @Metadata({ data: "json, name=PipelineStatus" })
  pipelineStatus?: PipelineStatusEnum;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}

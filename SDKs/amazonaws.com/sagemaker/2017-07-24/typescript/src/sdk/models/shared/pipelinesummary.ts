import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PipelineSummary
/** 
 * A summary of a pipeline.
**/
export class PipelineSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastExecutionTime" })
  lastExecutionTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;

  @Metadata({ data: "json, name=PipelineDescription" })
  pipelineDescription?: string;

  @Metadata({ data: "json, name=PipelineDisplayName" })
  pipelineDisplayName?: string;

  @Metadata({ data: "json, name=PipelineName" })
  pipelineName?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}

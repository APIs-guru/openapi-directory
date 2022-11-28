import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PipelineSummary
/** 
 * A summary of a pipeline.
**/
export class PipelineSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastExecutionTime" })
  lastExecutionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineDescription" })
  pipelineDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineDisplayName" })
  pipelineDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineName" })
  pipelineName?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}

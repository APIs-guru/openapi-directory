import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { PipelineStatusEnum } from "./pipelinestatusenum";
import { Tag } from "./tag";



// Pipeline
/** 
 * A SageMaker Model Building Pipeline instance.
**/
export class Pipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastRunTime" })
  lastRunTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineDescription" })
  pipelineDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineDisplayName" })
  pipelineDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineName" })
  pipelineName?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineStatus" })
  pipelineStatus?: PipelineStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}

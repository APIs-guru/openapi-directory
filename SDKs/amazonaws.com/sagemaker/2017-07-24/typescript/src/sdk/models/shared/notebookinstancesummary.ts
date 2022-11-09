import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";


// NotebookInstanceSummary
/** 
 * Provides summary information for an Amazon SageMaker notebook instance.
**/
export class NotebookInstanceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalCodeRepositories" })
  additionalCodeRepositories?: string[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DefaultCodeRepository" })
  defaultCodeRepository?: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: InstanceTypeEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=NotebookInstanceArn" })
  notebookInstanceArn: string;

  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName?: string;

  @Metadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;

  @Metadata({ data: "json, name=NotebookInstanceStatus" })
  notebookInstanceStatus?: NotebookInstanceStatusEnum;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}

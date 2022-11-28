import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";



// NotebookInstanceSummary
/** 
 * Provides summary information for an Amazon SageMaker notebook instance.
**/
export class NotebookInstanceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalCodeRepositories" })
  additionalCodeRepositories?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultCodeRepository" })
  defaultCodeRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceArn" })
  notebookInstanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceStatus" })
  notebookInstanceStatus?: NotebookInstanceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}

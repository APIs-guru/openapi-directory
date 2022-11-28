import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";
/**
 * Provides summary information for an Amazon SageMaker notebook instance.
**/
export declare class NotebookInstanceSummary extends SpeakeasyBase {
    additionalCodeRepositories?: string[];
    creationTime?: Date;
    defaultCodeRepository?: string;
    instanceType?: InstanceTypeEnum;
    lastModifiedTime?: Date;
    notebookInstanceArn: string;
    notebookInstanceLifecycleConfigName?: string;
    notebookInstanceName: string;
    notebookInstanceStatus?: NotebookInstanceStatusEnum;
    url?: string;
}

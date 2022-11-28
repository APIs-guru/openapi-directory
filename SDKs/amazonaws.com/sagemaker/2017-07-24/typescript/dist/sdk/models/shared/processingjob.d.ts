import { SpeakeasyBase } from "../../../internal/utils";
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";
import { Tag } from "./tag";
/**
 * An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process Data and Evaluate Models</a>.
**/
export declare class ProcessingJob extends SpeakeasyBase {
    appSpecification?: AppSpecification;
    autoMlJobArn?: string;
    creationTime?: Date;
    environment?: Map<string, string>;
    exitMessage?: string;
    experimentConfig?: ExperimentConfig;
    failureReason?: string;
    lastModifiedTime?: Date;
    monitoringScheduleArn?: string;
    networkConfig?: NetworkConfig;
    processingEndTime?: Date;
    processingInputs?: ProcessingInput[];
    processingJobArn?: string;
    processingJobName?: string;
    processingJobStatus?: ProcessingJobStatusEnum;
    processingOutputConfig?: ProcessingOutputConfig;
    processingResources?: ProcessingResources;
    processingStartTime?: Date;
    roleArn?: string;
    stoppingCondition?: ProcessingStoppingCondition;
    tags?: Tag[];
    trainingJobArn?: string;
}

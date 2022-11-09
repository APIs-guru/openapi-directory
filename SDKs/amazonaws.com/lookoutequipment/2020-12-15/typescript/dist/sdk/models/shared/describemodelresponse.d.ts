import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataPreProcessingConfiguration } from "./datapreprocessingconfiguration";
import { LabelsInputConfiguration } from "./labelsinputconfiguration";
import { ModelStatusEnum } from "./modelstatusenum";
export declare class DescribeModelResponse extends SpeakeasyBase {
    createdAt?: Date;
    dataPreProcessingConfiguration?: DataPreProcessingConfiguration;
    datasetArn?: string;
    datasetName?: string;
    evaluationDataEndTime?: Date;
    evaluationDataStartTime?: Date;
    failedReason?: string;
    labelsInputConfiguration?: LabelsInputConfiguration;
    lastUpdatedTime?: Date;
    modelArn?: string;
    modelMetrics?: string;
    modelName?: string;
    offCondition?: string;
    roleArn?: string;
    schema?: string;
    serverSideKmsKeyId?: string;
    status?: ModelStatusEnum;
    trainingDataEndTime?: Date;
    trainingDataStartTime?: Date;
    trainingExecutionEndTime?: Date;
    trainingExecutionStartTime?: Date;
}

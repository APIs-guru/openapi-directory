import { SpeakeasyBase } from "../../../internal/utils";
import { DataPreProcessingConfiguration } from "./datapreprocessingconfiguration";
import { DatasetSchema } from "./datasetschema";
import { LabelsInputConfiguration } from "./labelsinputconfiguration";
import { Tag } from "./tag";
export declare class CreateModelRequest extends SpeakeasyBase {
    clientToken: string;
    dataPreProcessingConfiguration?: DataPreProcessingConfiguration;
    datasetName: string;
    datasetSchema?: DatasetSchema;
    evaluationDataEndTime?: Date;
    evaluationDataStartTime?: Date;
    labelsInputConfiguration?: LabelsInputConfiguration;
    modelName: string;
    offCondition?: string;
    roleArn?: string;
    serverSideKmsKeyId?: string;
    tags?: Tag[];
    trainingDataEndTime?: Date;
    trainingDataStartTime?: Date;
}

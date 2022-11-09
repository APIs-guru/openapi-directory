import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataPreProcessingConfiguration } from "./datapreprocessingconfiguration";
import { LabelsInputConfiguration } from "./labelsinputconfiguration";
import { ModelStatusEnum } from "./modelstatusenum";


export class DescribeModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DataPreProcessingConfiguration" })
  dataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=EvaluationDataEndTime" })
  evaluationDataEndTime?: Date;

  @Metadata({ data: "json, name=EvaluationDataStartTime" })
  evaluationDataStartTime?: Date;

  @Metadata({ data: "json, name=FailedReason" })
  failedReason?: string;

  @Metadata({ data: "json, name=LabelsInputConfiguration" })
  labelsInputConfiguration?: LabelsInputConfiguration;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @Metadata({ data: "json, name=ModelMetrics" })
  modelMetrics?: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=OffCondition" })
  offCondition?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=Schema" })
  schema?: string;

  @Metadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;

  @Metadata({ data: "json, name=TrainingDataEndTime" })
  trainingDataEndTime?: Date;

  @Metadata({ data: "json, name=TrainingDataStartTime" })
  trainingDataStartTime?: Date;

  @Metadata({ data: "json, name=TrainingExecutionEndTime" })
  trainingExecutionEndTime?: Date;

  @Metadata({ data: "json, name=TrainingExecutionStartTime" })
  trainingExecutionStartTime?: Date;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPreProcessingConfiguration } from "./datapreprocessingconfiguration";
import { LabelsInputConfiguration } from "./labelsinputconfiguration";
import { ModelStatusEnum } from "./modelstatusenum";



export class DescribeModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataPreProcessingConfiguration" })
  dataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=EvaluationDataEndTime" })
  evaluationDataEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EvaluationDataStartTime" })
  evaluationDataStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailedReason" })
  failedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LabelsInputConfiguration" })
  labelsInputConfiguration?: LabelsInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelMetrics" })
  modelMetrics?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=OffCondition" })
  offCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TrainingDataEndTime" })
  trainingDataEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingDataStartTime" })
  trainingDataStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingExecutionEndTime" })
  trainingExecutionEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingExecutionStartTime" })
  trainingExecutionStartTime?: Date;
}

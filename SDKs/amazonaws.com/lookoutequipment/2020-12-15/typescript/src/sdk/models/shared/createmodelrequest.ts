import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPreProcessingConfiguration } from "./datapreprocessingconfiguration";
import { DatasetSchema } from "./datasetschema";
import { LabelsInputConfiguration } from "./labelsinputconfiguration";
import { Tag } from "./tag";



export class CreateModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=DataPreProcessingConfiguration" })
  dataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetSchema" })
  datasetSchema?: DatasetSchema;

  @SpeakeasyMetadata({ data: "json, name=EvaluationDataEndTime" })
  evaluationDataEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EvaluationDataStartTime" })
  evaluationDataStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LabelsInputConfiguration" })
  labelsInputConfiguration?: LabelsInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=OffCondition" })
  offCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrainingDataEndTime" })
  trainingDataEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingDataStartTime" })
  trainingDataStartTime?: Date;
}

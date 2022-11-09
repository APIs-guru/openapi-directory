import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataPreProcessingConfiguration } from "./datapreprocessingconfiguration";
import { DatasetSchema } from "./datasetschema";
import { LabelsInputConfiguration } from "./labelsinputconfiguration";
import { Tag } from "./tag";


export class CreateModelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=DataPreProcessingConfiguration" })
  dataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName: string;

  @Metadata({ data: "json, name=DatasetSchema" })
  datasetSchema?: DatasetSchema;

  @Metadata({ data: "json, name=EvaluationDataEndTime" })
  evaluationDataEndTime?: Date;

  @Metadata({ data: "json, name=EvaluationDataStartTime" })
  evaluationDataStartTime?: Date;

  @Metadata({ data: "json, name=LabelsInputConfiguration" })
  labelsInputConfiguration?: LabelsInputConfiguration;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=OffCondition" })
  offCondition?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrainingDataEndTime" })
  trainingDataEndTime?: Date;

  @Metadata({ data: "json, name=TrainingDataStartTime" })
  trainingDataStartTime?: Date;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationResult } from "./evaluationresult";
import { GroundTruthManifest } from "./groundtruthmanifest";
import { OutputConfig } from "./outputconfig";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";
import { TestingDataResult } from "./testingdataresult";
import { TrainingDataResult } from "./trainingdataresult";


// ProjectVersionDescription
/** 
 * The description of a version of a model.
**/
export class ProjectVersionDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BillableTrainingTimeInSeconds" })
  billableTrainingTimeInSeconds?: number;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=EvaluationResult" })
  evaluationResult?: EvaluationResult;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=ManifestSummary" })
  manifestSummary?: GroundTruthManifest;

  @Metadata({ data: "json, name=MinInferenceUnits" })
  minInferenceUnits?: number;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig?: OutputConfig;

  @Metadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ProjectVersionStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=TestingDataResult" })
  testingDataResult?: TestingDataResult;

  @Metadata({ data: "json, name=TrainingDataResult" })
  trainingDataResult?: TrainingDataResult;

  @Metadata({ data: "json, name=TrainingEndTimestamp" })
  trainingEndTimestamp?: Date;
}

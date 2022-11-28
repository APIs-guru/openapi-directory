import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=BillableTrainingTimeInSeconds" })
  billableTrainingTimeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=EvaluationResult" })
  evaluationResult?: EvaluationResult;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ManifestSummary" })
  manifestSummary?: GroundTruthManifest;

  @SpeakeasyMetadata({ data: "json, name=MinInferenceUnits" })
  minInferenceUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig?: OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProjectVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=TestingDataResult" })
  testingDataResult?: TestingDataResult;

  @SpeakeasyMetadata({ data: "json, name=TrainingDataResult" })
  trainingDataResult?: TrainingDataResult;

  @SpeakeasyMetadata({ data: "json, name=TrainingEndTimestamp" })
  trainingEndTimestamp?: Date;
}

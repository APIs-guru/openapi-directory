import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResult } from "./evaluationresult";
import { GroundTruthManifest } from "./groundtruthmanifest";
import { OutputConfig } from "./outputconfig";
import { ProjectVersionStatusEnum } from "./projectversionstatusenum";
import { TestingDataResult } from "./testingdataresult";
import { TrainingDataResult } from "./trainingdataresult";
/**
 * The description of a version of a model.
**/
export declare class ProjectVersionDescription extends SpeakeasyBase {
    billableTrainingTimeInSeconds?: number;
    creationTimestamp?: Date;
    evaluationResult?: EvaluationResult;
    kmsKeyId?: string;
    manifestSummary?: GroundTruthManifest;
    minInferenceUnits?: number;
    outputConfig?: OutputConfig;
    projectVersionArn?: string;
    status?: ProjectVersionStatusEnum;
    statusMessage?: string;
    testingDataResult?: TestingDataResult;
    trainingDataResult?: TrainingDataResult;
    trainingEndTimestamp?: Date;
}

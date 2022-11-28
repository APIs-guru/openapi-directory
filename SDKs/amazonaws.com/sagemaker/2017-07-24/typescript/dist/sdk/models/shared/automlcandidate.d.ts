import { SpeakeasyBase } from "../../../internal/utils";
import { CandidateProperties } from "./candidateproperties";
import { CandidateStatusEnum } from "./candidatestatusenum";
import { AutoMlCandidateStep } from "./automlcandidatestep";
import { FinalAutoMlJobObjectiveMetric } from "./finalautomljobobjectivemetric";
import { AutoMlContainerDefinition } from "./automlcontainerdefinition";
import { ObjectiveStatusEnum } from "./objectivestatusenum";
/**
 * Information about a candidate produced by an AutoML training job, including its status, steps, and other properties.
**/
export declare class AutoMlCandidate extends SpeakeasyBase {
    candidateName: string;
    candidateProperties?: CandidateProperties;
    candidateStatus: CandidateStatusEnum;
    candidateSteps: AutoMlCandidateStep[];
    creationTime: Date;
    endTime?: Date;
    failureReason?: string;
    finalAutoMlJobObjectiveMetric?: FinalAutoMlJobObjectiveMetric;
    inferenceContainers?: AutoMlContainerDefinition[];
    lastModifiedTime: Date;
    objectiveStatus: ObjectiveStatusEnum;
}

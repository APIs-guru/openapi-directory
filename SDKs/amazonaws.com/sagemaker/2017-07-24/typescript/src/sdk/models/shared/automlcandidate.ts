import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CandidateProperties } from "./candidateproperties";
import { CandidateStatusEnum } from "./candidatestatusenum";
import { AutoMlCandidateStep } from "./automlcandidatestep";
import { FinalAutoMlJobObjectiveMetric } from "./finalautomljobobjectivemetric";
import { AutoMlContainerDefinition } from "./automlcontainerdefinition";
import { ObjectiveStatusEnum } from "./objectivestatusenum";



// AutoMlCandidate
/** 
 * Information about a candidate produced by an AutoML training job, including its status, steps, and other properties.
**/
export class AutoMlCandidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CandidateName" })
  candidateName: string;

  @SpeakeasyMetadata({ data: "json, name=CandidateProperties" })
  candidateProperties?: CandidateProperties;

  @SpeakeasyMetadata({ data: "json, name=CandidateStatus" })
  candidateStatus: CandidateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CandidateSteps", elemType: AutoMlCandidateStep })
  candidateSteps: AutoMlCandidateStep[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=FinalAutoMLJobObjectiveMetric" })
  finalAutoMlJobObjectiveMetric?: FinalAutoMlJobObjectiveMetric;

  @SpeakeasyMetadata({ data: "json, name=InferenceContainers", elemType: AutoMlContainerDefinition })
  inferenceContainers?: AutoMlContainerDefinition[];

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ObjectiveStatus" })
  objectiveStatus: ObjectiveStatusEnum;
}

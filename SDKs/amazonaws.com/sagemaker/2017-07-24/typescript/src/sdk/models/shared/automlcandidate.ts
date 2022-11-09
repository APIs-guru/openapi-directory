import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CandidateName" })
  candidateName: string;

  @Metadata({ data: "json, name=CandidateProperties" })
  candidateProperties?: CandidateProperties;

  @Metadata({ data: "json, name=CandidateStatus" })
  candidateStatus: CandidateStatusEnum;

  @Metadata({ data: "json, name=CandidateSteps", elemType: shared.AutoMlCandidateStep })
  candidateSteps: AutoMlCandidateStep[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FinalAutoMLJobObjectiveMetric" })
  finalAutoMlJobObjectiveMetric?: FinalAutoMlJobObjectiveMetric;

  @Metadata({ data: "json, name=InferenceContainers", elemType: shared.AutoMlContainerDefinition })
  inferenceContainers?: AutoMlContainerDefinition[];

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=ObjectiveStatus" })
  objectiveStatus: ObjectiveStatusEnum;
}

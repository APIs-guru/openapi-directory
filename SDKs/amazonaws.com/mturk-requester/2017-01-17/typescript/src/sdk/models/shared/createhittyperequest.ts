import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QualificationRequirement } from "./qualificationrequirement";


export class CreateHitTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentDurationInSeconds" })
  assignmentDurationInSeconds: number;

  @Metadata({ data: "json, name=AutoApprovalDelayInSeconds" })
  autoApprovalDelayInSeconds?: number;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Keywords" })
  keywords?: string;

  @Metadata({ data: "json, name=QualificationRequirements", elemType: shared.QualificationRequirement })
  qualificationRequirements?: QualificationRequirement[];

  @Metadata({ data: "json, name=Reward" })
  reward: string;

  @Metadata({ data: "json, name=Title" })
  title: string;
}

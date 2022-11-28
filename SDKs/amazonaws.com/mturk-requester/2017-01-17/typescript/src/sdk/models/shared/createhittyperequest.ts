import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualificationRequirement } from "./qualificationrequirement";



export class CreateHitTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentDurationInSeconds" })
  assignmentDurationInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=AutoApprovalDelayInSeconds" })
  autoApprovalDelayInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Keywords" })
  keywords?: string;

  @SpeakeasyMetadata({ data: "json, name=QualificationRequirements", elemType: QualificationRequirement })
  qualificationRequirements?: QualificationRequirement[];

  @SpeakeasyMetadata({ data: "json, name=Reward" })
  reward: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title: string;
}

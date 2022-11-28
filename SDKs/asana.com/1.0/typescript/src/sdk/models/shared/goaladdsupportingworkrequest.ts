import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoalAddSupportingWorkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=supporting_work" })
  supportingWork: string;
}

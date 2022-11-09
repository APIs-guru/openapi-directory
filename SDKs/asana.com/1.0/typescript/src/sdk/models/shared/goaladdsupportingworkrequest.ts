import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoalAddSupportingWorkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=supporting_work" })
  supportingWork: string;
}

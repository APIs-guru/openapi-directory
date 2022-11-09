import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTrialComponentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;
}

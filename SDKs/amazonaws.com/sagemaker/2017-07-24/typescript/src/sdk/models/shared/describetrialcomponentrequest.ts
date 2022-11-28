import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTrialComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;
}

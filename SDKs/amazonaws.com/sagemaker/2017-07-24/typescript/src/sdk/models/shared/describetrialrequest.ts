import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTrialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName: string;
}

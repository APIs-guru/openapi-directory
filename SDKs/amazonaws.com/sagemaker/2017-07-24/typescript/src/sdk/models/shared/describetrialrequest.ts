import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTrialRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrialName" })
  trialName: string;
}

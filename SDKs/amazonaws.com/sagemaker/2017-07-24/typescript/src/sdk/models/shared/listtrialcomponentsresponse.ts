import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentSummary } from "./trialcomponentsummary";



export class ListTrialComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentSummaries", elemType: TrialComponentSummary })
  trialComponentSummaries?: TrialComponentSummary[];
}

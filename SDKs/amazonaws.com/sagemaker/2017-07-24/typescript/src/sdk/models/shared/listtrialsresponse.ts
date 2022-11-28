import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrialSummary } from "./trialsummary";



export class ListTrialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialSummaries", elemType: TrialSummary })
  trialSummaries?: TrialSummary[];
}

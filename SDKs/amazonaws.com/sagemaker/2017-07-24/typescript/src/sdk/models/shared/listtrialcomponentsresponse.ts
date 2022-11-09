import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrialComponentSummary } from "./trialcomponentsummary";


export class ListTrialComponentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TrialComponentSummaries", elemType: shared.TrialComponentSummary })
  trialComponentSummaries?: TrialComponentSummary[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrialSummary } from "./trialsummary";


export class ListTrialsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TrialSummaries", elemType: shared.TrialSummary })
  trialSummaries?: TrialSummary[];
}

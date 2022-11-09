import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoMlCandidate } from "./automlcandidate";


export class ListCandidatesForAutoMlJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Candidates", elemType: shared.AutoMlCandidate })
  candidates: AutoMlCandidate[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

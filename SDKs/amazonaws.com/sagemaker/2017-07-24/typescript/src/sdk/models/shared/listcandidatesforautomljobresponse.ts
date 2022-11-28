import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlCandidate } from "./automlcandidate";



export class ListCandidatesForAutoMlJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Candidates", elemType: AutoMlCandidate })
  candidates: AutoMlCandidate[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

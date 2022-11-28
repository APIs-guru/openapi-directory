import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CandidateSearch } from "./candidatesearch";



export class CandidateSearchList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: CandidateSearch })
  results?: CandidateSearch[];
}

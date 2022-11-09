import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CandidateSearch } from "./candidatesearch";


export class CandidateSearchList extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.CandidateSearch })
  results?: CandidateSearch[];
}

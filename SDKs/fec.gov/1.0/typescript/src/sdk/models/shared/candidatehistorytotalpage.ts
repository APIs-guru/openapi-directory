import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { CandidateHistoryTotal } from "./candidatehistorytotal";


export class CandidateHistoryTotalPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.CandidateHistoryTotal })
  results?: CandidateHistoryTotal[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CandidateHistoryTotal } from "./candidatehistorytotal";



export class CandidateHistoryTotalPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CandidateHistoryTotal })
  results?: CandidateHistoryTotal[];
}

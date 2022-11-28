import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CandidateDetail } from "./candidatedetail";



export class CandidateDetailPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CandidateDetail })
  results?: CandidateDetail[];
}

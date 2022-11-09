import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { CandidateDetail } from "./candidatedetail";


export class CandidateDetailPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.CandidateDetail })
  results?: CandidateDetail[];
}

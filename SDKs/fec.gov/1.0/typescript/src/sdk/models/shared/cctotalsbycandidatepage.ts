import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { CcTotalsByCandidate } from "./cctotalsbycandidate";


export class CcTotalsByCandidatePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.CcTotalsByCandidate })
  results?: CcTotalsByCandidate[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CcTotalsByCandidate } from "./cctotalsbycandidate";



export class CcTotalsByCandidatePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CcTotalsByCandidate })
  results?: CcTotalsByCandidate[];
}

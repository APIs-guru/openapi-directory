import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { EcTotalsByCandidate } from "./ectotalsbycandidate";


export class EcTotalsByCandidatePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.EcTotalsByCandidate })
  results?: EcTotalsByCandidate[];
}

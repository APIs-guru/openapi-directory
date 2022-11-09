import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { IeTotalsByCandidate } from "./ietotalsbycandidate";


export class IeTotalsByCandidatePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.IeTotalsByCandidate })
  results?: IeTotalsByCandidate[];
}

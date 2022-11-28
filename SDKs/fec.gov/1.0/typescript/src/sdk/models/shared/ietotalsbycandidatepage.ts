import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { IeTotalsByCandidate } from "./ietotalsbycandidate";



export class IeTotalsByCandidatePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: IeTotalsByCandidate })
  results?: IeTotalsByCandidate[];
}

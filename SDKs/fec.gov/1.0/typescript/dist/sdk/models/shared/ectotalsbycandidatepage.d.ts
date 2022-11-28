import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { EcTotalsByCandidate } from "./ectotalsbycandidate";
export declare class EcTotalsByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: EcTotalsByCandidate[];
}

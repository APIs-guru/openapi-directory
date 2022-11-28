import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CcTotalsByCandidate } from "./cctotalsbycandidate";
export declare class CcTotalsByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: CcTotalsByCandidate[];
}

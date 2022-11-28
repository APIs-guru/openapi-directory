import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { IeTotalsByCandidate } from "./ietotalsbycandidate";
export declare class IeTotalsByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: IeTotalsByCandidate[];
}

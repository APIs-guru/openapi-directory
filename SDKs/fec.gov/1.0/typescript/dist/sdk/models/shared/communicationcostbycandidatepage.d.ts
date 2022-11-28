import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CommunicationCostByCandidate } from "./communicationcostbycandidate";
export declare class CommunicationCostByCandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: CommunicationCostByCandidate[];
}

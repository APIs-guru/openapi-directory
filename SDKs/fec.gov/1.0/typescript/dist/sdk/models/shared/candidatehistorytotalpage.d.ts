import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CandidateHistoryTotal } from "./candidatehistorytotal";
export declare class CandidateHistoryTotalPage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: CandidateHistoryTotal[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { Candidate } from "./candidate";
export declare class CandidatePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: Candidate[];
}

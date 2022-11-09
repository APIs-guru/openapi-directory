import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ByteMatchSetSummary } from "./bytematchsetsummary";
export declare class ListByteMatchSetsResponse extends SpeakeasyBase {
    byteMatchSets?: ByteMatchSetSummary[];
    nextMarker?: string;
}

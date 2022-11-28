import { SpeakeasyBase } from "../../../internal/utils";
import { StreamKeySummary } from "./streamkeysummary";
export declare class ListStreamKeysResponse extends SpeakeasyBase {
    nextToken?: string;
    streamKeys: StreamKeySummary[];
}

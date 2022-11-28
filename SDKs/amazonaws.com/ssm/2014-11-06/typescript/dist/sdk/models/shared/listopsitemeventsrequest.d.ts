import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemEventFilter } from "./opsitemeventfilter";
export declare class ListOpsItemEventsRequest extends SpeakeasyBase {
    filters?: OpsItemEventFilter[];
    maxResults?: number;
    nextToken?: string;
}

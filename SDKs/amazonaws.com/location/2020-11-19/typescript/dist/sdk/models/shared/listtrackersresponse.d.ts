import { SpeakeasyBase } from "../../../internal/utils";
import { ListTrackersResponseEntry } from "./listtrackersresponseentry";
export declare class ListTrackersResponse extends SpeakeasyBase {
    entries: ListTrackersResponseEntry[];
    nextToken?: string;
}

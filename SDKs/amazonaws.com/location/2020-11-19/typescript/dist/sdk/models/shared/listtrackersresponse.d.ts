import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ListTrackersResponseEntry } from "./listtrackersresponseentry";
export declare class ListTrackersResponse extends SpeakeasyBase {
    entries: ListTrackersResponseEntry[];
    nextToken?: string;
}

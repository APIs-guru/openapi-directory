import { SpeakeasyBase } from "../../../internal/utils";
import { ItemDetail } from "./itemdetail";
export declare enum NextPlaybackItemSuggestionTypeEnum {
    StartWatching = "StartWatching",
    ContinueWatching = "ContinueWatching",
    RestartWatching = "RestartWatching",
    Sequential = "Sequential",
    None = "None"
}
export declare class NextPlaybackItem extends SpeakeasyBase {
    firstWatchedDate?: Date;
    lastWatchedDate?: Date;
    next?: ItemDetail;
    sourceItemId: string;
    suggestionType?: NextPlaybackItemSuggestionTypeEnum;
}

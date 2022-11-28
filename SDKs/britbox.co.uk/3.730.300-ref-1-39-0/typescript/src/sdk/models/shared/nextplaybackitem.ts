import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemDetail } from "./itemdetail";


export enum NextPlaybackItemSuggestionTypeEnum {
    StartWatching = "StartWatching",
    ContinueWatching = "ContinueWatching",
    RestartWatching = "RestartWatching",
    Sequential = "Sequential",
    None = "None"
}


export class NextPlaybackItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstWatchedDate" })
  firstWatchedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastWatchedDate" })
  lastWatchedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ItemDetail;

  @SpeakeasyMetadata({ data: "json, name=sourceItemId" })
  sourceItemId: string;

  @SpeakeasyMetadata({ data: "json, name=suggestionType" })
  suggestionType?: NextPlaybackItemSuggestionTypeEnum;
}

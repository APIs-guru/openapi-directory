import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemDetail } from "./itemdetail";

export enum NextPlaybackItemSuggestionTypeEnum {
    StartWatching = "StartWatching"
,    ContinueWatching = "ContinueWatching"
,    RestartWatching = "RestartWatching"
,    Sequential = "Sequential"
,    None = "None"
}


export class NextPlaybackItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstWatchedDate" })
  firstWatchedDate?: Date;

  @Metadata({ data: "json, name=lastWatchedDate" })
  lastWatchedDate?: Date;

  @Metadata({ data: "json, name=next" })
  next?: ItemDetail;

  @Metadata({ data: "json, name=sourceItemId" })
  sourceItemId: string;

  @Metadata({ data: "json, name=suggestionType" })
  suggestionType?: NextPlaybackItemSuggestionTypeEnum;
}

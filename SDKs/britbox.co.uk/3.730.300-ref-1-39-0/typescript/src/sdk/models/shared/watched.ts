import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Watched extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstWatchedDate" })
  firstWatchedDate: Date;

  @SpeakeasyMetadata({ data: "json, name=isFullyWatched" })
  isFullyWatched?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastWatchedDate" })
  lastWatchedDate: Date;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: number;
}

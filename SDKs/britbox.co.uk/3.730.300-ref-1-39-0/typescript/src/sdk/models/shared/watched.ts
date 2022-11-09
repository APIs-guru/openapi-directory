import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Watched extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstWatchedDate" })
  firstWatchedDate: Date;

  @Metadata({ data: "json, name=isFullyWatched" })
  isFullyWatched?: boolean;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=lastWatchedDate" })
  lastWatchedDate: Date;

  @Metadata({ data: "json, name=position" })
  position: number;
}

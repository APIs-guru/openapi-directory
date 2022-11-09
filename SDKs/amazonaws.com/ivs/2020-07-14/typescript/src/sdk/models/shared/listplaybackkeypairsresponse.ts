import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlaybackKeyPairSummary } from "./playbackkeypairsummary";


export class ListPlaybackKeyPairsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPairs", elemType: shared.PlaybackKeyPairSummary })
  keyPairs: PlaybackKeyPairSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

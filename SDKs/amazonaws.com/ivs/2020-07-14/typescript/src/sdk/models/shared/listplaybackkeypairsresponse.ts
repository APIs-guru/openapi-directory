import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaybackKeyPairSummary } from "./playbackkeypairsummary";



export class ListPlaybackKeyPairsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPairs", elemType: PlaybackKeyPairSummary })
  keyPairs: PlaybackKeyPairSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

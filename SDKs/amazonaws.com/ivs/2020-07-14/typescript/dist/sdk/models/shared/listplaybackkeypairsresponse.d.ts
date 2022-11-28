import { SpeakeasyBase } from "../../../internal/utils";
import { PlaybackKeyPairSummary } from "./playbackkeypairsummary";
export declare class ListPlaybackKeyPairsResponse extends SpeakeasyBase {
    keyPairs: PlaybackKeyPairSummary[];
    nextToken?: string;
}

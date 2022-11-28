import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaybackKeyPair } from "./playbackkeypair";



export class GetPlaybackKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: PlaybackKeyPair;
}

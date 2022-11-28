import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaybackKeyPair } from "./playbackkeypair";



export class ImportPlaybackKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: PlaybackKeyPair;
}

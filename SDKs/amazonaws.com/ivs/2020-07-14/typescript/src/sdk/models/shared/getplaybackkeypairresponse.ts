import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlaybackKeyPair } from "./playbackkeypair";


export class GetPlaybackKeyPairResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPair" })
  keyPair?: PlaybackKeyPair;
}

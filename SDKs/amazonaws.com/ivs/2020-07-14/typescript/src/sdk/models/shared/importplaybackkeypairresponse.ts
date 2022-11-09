import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlaybackKeyPair } from "./playbackkeypair";


export class ImportPlaybackKeyPairResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPair" })
  keyPair?: PlaybackKeyPair;
}

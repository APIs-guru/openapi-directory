import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Track } from "./track";



export class TracksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata({ elemType: Track })
  tracks?: Track[];
}

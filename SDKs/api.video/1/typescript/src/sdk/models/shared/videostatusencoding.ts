import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideostatusEncodingMetadata } from "./videostatusencodingmetadata";
import { Quality } from "./quality";



export class VideostatusEncoding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: VideostatusEncodingMetadata;

  @SpeakeasyMetadata({ data: "json, name=playable" })
  playable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=qualities", elemType: Quality })
  qualities?: Quality[];
}

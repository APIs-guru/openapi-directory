import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideostatusEncodingMetadata } from "./videostatusencodingmetadata";
import { Quality } from "./quality";


export class VideostatusEncoding extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: VideostatusEncodingMetadata;

  @Metadata({ data: "json, name=playable" })
  playable?: boolean;

  @Metadata({ data: "json, name=qualities", elemType: shared.Quality })
  qualities?: Quality[];
}

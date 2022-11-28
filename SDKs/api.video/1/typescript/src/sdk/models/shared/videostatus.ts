import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideostatusEncoding } from "./videostatusencoding";
import { VideostatusIngest } from "./videostatusingest";



export class Videostatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: VideostatusEncoding;

  @SpeakeasyMetadata({ data: "json, name=ingest" })
  ingest?: VideostatusIngest;
}

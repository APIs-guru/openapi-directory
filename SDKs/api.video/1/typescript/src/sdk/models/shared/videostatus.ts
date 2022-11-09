import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideostatusEncoding } from "./videostatusencoding";
import { VideostatusIngest } from "./videostatusingest";


export class Videostatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=encoding" })
  encoding?: VideostatusEncoding;

  @Metadata({ data: "json, name=ingest" })
  ingest?: VideostatusIngest;
}

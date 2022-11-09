import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportAptArtifactsGcsSource } from "./importaptartifactsgcssource";


// ImportAptArtifactsRequest
/** 
 * The request to import new apt artifacts.
**/
export class ImportAptArtifactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: ImportAptArtifactsGcsSource;
}

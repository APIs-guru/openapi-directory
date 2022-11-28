import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportAptArtifactsGcsSource } from "./importaptartifactsgcssource";



// ImportAptArtifactsRequest
/** 
 * The request to import new apt artifacts.
**/
export class ImportAptArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: ImportAptArtifactsGcsSource;
}

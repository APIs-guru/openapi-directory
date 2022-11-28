import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportYumArtifactsGcsSource } from "./importyumartifactsgcssource";



// ImportYumArtifactsRequest
/** 
 * The request to import new yum artifacts.
**/
export class ImportYumArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: ImportYumArtifactsGcsSource;
}

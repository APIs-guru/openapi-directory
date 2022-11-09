import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportYumArtifactsGcsSource } from "./importyumartifactsgcssource";


// ImportYumArtifactsRequest
/** 
 * The request to import new yum artifacts.
**/
export class ImportYumArtifactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: ImportYumArtifactsGcsSource;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportYumArtifactsGcsSource
/** 
 * Google Cloud Storage location where the artifacts currently reside.
**/
export class ImportYumArtifactsGcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=uris" })
  uris?: string[];

  @Metadata({ data: "json, name=useWildcards" })
  useWildcards?: boolean;
}

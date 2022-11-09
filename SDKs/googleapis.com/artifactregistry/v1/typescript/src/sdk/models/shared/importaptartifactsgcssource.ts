import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportAptArtifactsGcsSource
/** 
 * Google Cloud Storage location where the artifacts currently reside.
**/
export class ImportAptArtifactsGcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=uris" })
  uris?: string[];

  @Metadata({ data: "json, name=useWildcards" })
  useWildcards?: boolean;
}

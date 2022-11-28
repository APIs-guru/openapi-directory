import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportAptArtifactsGcsSource
/** 
 * Google Cloud Storage location where the artifacts currently reside.
**/
export class ImportAptArtifactsGcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];

  @SpeakeasyMetadata({ data: "json, name=useWildcards" })
  useWildcards?: boolean;
}

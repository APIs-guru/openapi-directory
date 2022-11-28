import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportYumArtifactsGcsSource
/** 
 * Google Cloud Storage location where the artifacts currently reside.
**/
export class ImportYumArtifactsGcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];

  @SpeakeasyMetadata({ data: "json, name=useWildcards" })
  useWildcards?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSourceType } from "./artifactsourcetype";



// ArtifactSource
/** 
 * A structure describing the source of an artifact.
**/
export class ArtifactSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceTypes", elemType: ArtifactSourceType })
  sourceTypes?: ArtifactSourceType[];

  @SpeakeasyMetadata({ data: "json, name=SourceUri" })
  sourceUri: string;
}

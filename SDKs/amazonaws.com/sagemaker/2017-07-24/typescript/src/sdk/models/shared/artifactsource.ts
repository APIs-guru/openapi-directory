import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtifactSourceType } from "./artifactsourcetype";


// ArtifactSource
/** 
 * A structure describing the source of an artifact.
**/
export class ArtifactSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceTypes", elemType: shared.ArtifactSourceType })
  sourceTypes?: ArtifactSourceType[];

  @Metadata({ data: "json, name=SourceUri" })
  sourceUri: string;
}

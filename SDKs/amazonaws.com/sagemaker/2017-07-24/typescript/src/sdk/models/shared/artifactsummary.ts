import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSource } from "./artifactsource";



// ArtifactSummary
/** 
 * Lists a summary of the properties of an artifact. An artifact represents a URI addressable object or data. Some examples are a dataset and a model.
**/
export class ArtifactSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ArtifactName" })
  artifactName?: string;

  @SpeakeasyMetadata({ data: "json, name=ArtifactType" })
  artifactType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: ArtifactSource;
}

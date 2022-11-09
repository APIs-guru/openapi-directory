import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactSource } from "./artifactsource";


// ArtifactSummary
/** 
 * Lists a summary of the properties of an artifact. An artifact represents a URI addressable object or data. Some examples are a dataset and a model.
**/
export class ArtifactSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactArn" })
  artifactArn?: string;

  @Metadata({ data: "json, name=ArtifactName" })
  artifactName?: string;

  @Metadata({ data: "json, name=ArtifactType" })
  artifactType?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Source" })
  source?: ArtifactSource;
}

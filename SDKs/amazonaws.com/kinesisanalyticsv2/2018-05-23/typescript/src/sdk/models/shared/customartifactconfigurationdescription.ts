import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";
import { MavenReference } from "./mavenreference";
import { S3ContentLocation } from "./s3contentlocation";


// CustomArtifactConfigurationDescription
/** 
 * Specifies a dependency JAR or a JAR of user-defined functions.
**/
export class CustomArtifactConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactType" })
  artifactType?: ArtifactTypeEnum;

  @Metadata({ data: "json, name=MavenReferenceDescription" })
  mavenReferenceDescription?: MavenReference;

  @Metadata({ data: "json, name=S3ContentLocationDescription" })
  s3ContentLocationDescription?: S3ContentLocation;
}

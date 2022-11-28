import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";
import { MavenReference } from "./mavenreference";
import { S3ContentLocation } from "./s3contentlocation";



// CustomArtifactConfigurationDescription
/** 
 * Specifies a dependency JAR or a JAR of user-defined functions.
**/
export class CustomArtifactConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactType" })
  artifactType?: ArtifactTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MavenReferenceDescription" })
  mavenReferenceDescription?: MavenReference;

  @SpeakeasyMetadata({ data: "json, name=S3ContentLocationDescription" })
  s3ContentLocationDescription?: S3ContentLocation;
}

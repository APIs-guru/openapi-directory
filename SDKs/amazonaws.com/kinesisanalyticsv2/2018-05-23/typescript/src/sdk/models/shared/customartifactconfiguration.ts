import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";
import { MavenReference } from "./mavenreference";
import { S3ContentLocation } from "./s3contentlocation";



// CustomArtifactConfiguration
/** 
 * Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).
**/
export class CustomArtifactConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactType" })
  artifactType: ArtifactTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MavenReference" })
  mavenReference?: MavenReference;

  @SpeakeasyMetadata({ data: "json, name=S3ContentLocation" })
  s3ContentLocation?: S3ContentLocation;
}

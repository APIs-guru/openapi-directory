import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";
import { MavenReference } from "./mavenreference";
import { S3ContentLocation } from "./s3contentlocation";
/**
 * Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).
**/
export declare class CustomArtifactConfiguration extends SpeakeasyBase {
    artifactType: ArtifactTypeEnum;
    mavenReference?: MavenReference;
    s3ContentLocation?: S3ContentLocation;
}

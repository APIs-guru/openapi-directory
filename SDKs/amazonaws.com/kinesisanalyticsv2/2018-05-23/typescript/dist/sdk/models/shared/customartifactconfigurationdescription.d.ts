import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";
import { MavenReference } from "./mavenreference";
import { S3ContentLocation } from "./s3contentlocation";
/**
 * Specifies a dependency JAR or a JAR of user-defined functions.
**/
export declare class CustomArtifactConfigurationDescription extends SpeakeasyBase {
    artifactType?: ArtifactTypeEnum;
    mavenReferenceDescription?: MavenReference;
    s3ContentLocationDescription?: S3ContentLocation;
}

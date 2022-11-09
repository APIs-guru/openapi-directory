import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
**/
export declare class MavenReference extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
    version: string;
}

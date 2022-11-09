import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.
**/
export declare class CloudBuildOptions extends SpeakeasyBase {
    appYamlPath?: string;
    cloudBuildTimeout?: string;
}

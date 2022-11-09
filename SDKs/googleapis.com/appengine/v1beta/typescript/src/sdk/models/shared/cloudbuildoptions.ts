import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudBuildOptions
/** 
 * Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.
**/
export class CloudBuildOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=appYamlPath" })
  appYamlPath?: string;

  @Metadata({ data: "json, name=cloudBuildTimeout" })
  cloudBuildTimeout?: string;
}

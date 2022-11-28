import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudBuildOptions
/** 
 * Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.
**/
export class CloudBuildOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appYamlPath" })
  appYamlPath?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudBuildTimeout" })
  cloudBuildTimeout?: string;
}

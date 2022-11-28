import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildInfo } from "./buildinfo";
import { CloudBuildOptions } from "./cloudbuildoptions";
import { ContainerInfo } from "./containerinfo";
import { FileInfo } from "./fileinfo";
import { ZipInfo } from "./zipinfo";



// Deployment
/** 
 * Code and application artifacts used to deploy a version to App Engine.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: BuildInfo;

  @SpeakeasyMetadata({ data: "json, name=cloudBuildOptions" })
  cloudBuildOptions?: CloudBuildOptions;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: ContainerInfo;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileInfo })
  files?: Map<string, FileInfo>;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: ZipInfo;
}

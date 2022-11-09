import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=build" })
  build?: BuildInfo;

  @Metadata({ data: "json, name=cloudBuildOptions" })
  cloudBuildOptions?: CloudBuildOptions;

  @Metadata({ data: "json, name=container" })
  container?: ContainerInfo;

  @Metadata({ data: "json, name=files", elemType: shared.FileInfo })
  files?: Map<string, FileInfo>;

  @Metadata({ data: "json, name=zip" })
  zip?: ZipInfo;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildInfo } from "./buildinfo";
import { CloudBuildOptions } from "./cloudbuildoptions";
import { ContainerInfo } from "./containerinfo";
import { FileInfo } from "./fileinfo";
import { ZipInfo } from "./zipinfo";
/**
 * Code and application artifacts used to deploy a version to App Engine.
**/
export declare class Deployment extends SpeakeasyBase {
    build?: BuildInfo;
    cloudBuildOptions?: CloudBuildOptions;
    container?: ContainerInfo;
    files?: Map<string, FileInfo>;
    zip?: ZipInfo;
}

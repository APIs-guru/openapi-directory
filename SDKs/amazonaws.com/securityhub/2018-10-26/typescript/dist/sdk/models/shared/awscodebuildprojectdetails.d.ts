import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCodeBuildProjectEnvironment } from "./awscodebuildprojectenvironment";
import { AwsCodeBuildProjectSource } from "./awscodebuildprojectsource";
import { AwsCodeBuildProjectVpcConfig } from "./awscodebuildprojectvpcconfig";
/**
 * Information about an CodeBuild project.
**/
export declare class AwsCodeBuildProjectDetails extends SpeakeasyBase {
    encryptionKey?: string;
    environment?: AwsCodeBuildProjectEnvironment;
    name?: string;
    serviceRole?: string;
    source?: AwsCodeBuildProjectSource;
    vpcConfig?: AwsCodeBuildProjectVpcConfig;
}

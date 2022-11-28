import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCodeBuildProjectEnvironmentRegistryCredential } from "./awscodebuildprojectenvironmentregistrycredential";
/**
 * Information about the build environment for this build project.
**/
export declare class AwsCodeBuildProjectEnvironment extends SpeakeasyBase {
    certificate?: string;
    imagePullCredentialsType?: string;
    registryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
    type?: string;
}

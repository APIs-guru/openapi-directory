import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsCodeBuildProjectEnvironmentRegistryCredential } from "./awscodebuildprojectenvironmentregistrycredential";


// AwsCodeBuildProjectEnvironment
/** 
 * Information about the build environment for this build project.
**/
export class AwsCodeBuildProjectEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=ImagePullCredentialsType" })
  imagePullCredentialsType?: string;

  @Metadata({ data: "json, name=RegistryCredential" })
  registryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}

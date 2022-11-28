import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCodeBuildProjectEnvironmentRegistryCredential } from "./awscodebuildprojectenvironmentregistrycredential";



// AwsCodeBuildProjectEnvironment
/** 
 * Information about the build environment for this build project.
**/
export class AwsCodeBuildProjectEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=ImagePullCredentialsType" })
  imagePullCredentialsType?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryCredential" })
  registryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}

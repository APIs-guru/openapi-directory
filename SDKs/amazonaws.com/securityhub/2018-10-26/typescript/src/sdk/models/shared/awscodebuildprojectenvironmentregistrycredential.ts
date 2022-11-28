import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCodeBuildProjectEnvironmentRegistryCredential
/** 
 * The credentials for access to a private registry.
**/
export class AwsCodeBuildProjectEnvironmentRegistryCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Credential" })
  credential?: string;

  @SpeakeasyMetadata({ data: "json, name=CredentialProvider" })
  credentialProvider?: string;
}

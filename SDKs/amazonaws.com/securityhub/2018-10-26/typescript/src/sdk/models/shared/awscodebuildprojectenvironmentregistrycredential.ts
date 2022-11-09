import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCodeBuildProjectEnvironmentRegistryCredential
/** 
 * The credentials for access to a private registry.
**/
export class AwsCodeBuildProjectEnvironmentRegistryCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=Credential" })
  credential?: string;

  @Metadata({ data: "json, name=CredentialProvider" })
  credentialProvider?: string;
}

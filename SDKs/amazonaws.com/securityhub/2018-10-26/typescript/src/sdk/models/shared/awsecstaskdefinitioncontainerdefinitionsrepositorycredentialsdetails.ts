import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails
/** 
 * The private repository authentication credentials to use.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CredentialsParameter" })
  credentialsParameter?: string;
}

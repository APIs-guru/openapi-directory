import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails
/** 
 * The private repository authentication credentials to use.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CredentialsParameter" })
  credentialsParameter?: string;
}

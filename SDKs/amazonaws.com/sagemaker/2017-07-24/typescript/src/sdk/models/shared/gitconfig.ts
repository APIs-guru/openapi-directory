import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitConfig
/** 
 * Specifies configuration details for a Git repository in your Amazon Web Services account.
**/
export class GitConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Branch" })
  branch?: string;

  @Metadata({ data: "json, name=RepositoryUrl" })
  repositoryUrl: string;

  @Metadata({ data: "json, name=SecretArn" })
  secretArn?: string;
}

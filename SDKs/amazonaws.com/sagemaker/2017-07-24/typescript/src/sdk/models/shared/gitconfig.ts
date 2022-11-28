import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitConfig
/** 
 * Specifies configuration details for a Git repository in your Amazon Web Services account.
**/
export class GitConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryUrl" })
  repositoryUrl: string;

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;
}

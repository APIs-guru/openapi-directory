import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitConfigForUpdate
/** 
 * Specifies configuration details for a Git repository when the repository is updated.
**/
export class GitConfigForUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretArn" })
  secretArn?: string;
}

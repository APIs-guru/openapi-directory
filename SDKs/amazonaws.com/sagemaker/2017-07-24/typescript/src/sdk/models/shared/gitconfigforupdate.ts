import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitConfigForUpdate
/** 
 * Specifies configuration details for a Git repository when the repository is updated.
**/
export class GitConfigForUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;
}

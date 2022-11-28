import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterRole
/** 
 * Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster.
**/
export class DbClusterRole extends SpeakeasyBase {
  @SpeakeasyMetadata()
  featureName?: string;

  @SpeakeasyMetadata()
  roleArn?: string;

  @SpeakeasyMetadata()
  status?: string;
}

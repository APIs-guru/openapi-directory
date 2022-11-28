import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbInstanceRole
/** 
 * Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.
**/
export class DbInstanceRole extends SpeakeasyBase {
  @SpeakeasyMetadata()
  featureName?: string;

  @SpeakeasyMetadata()
  roleArn?: string;

  @SpeakeasyMetadata()
  status?: string;
}

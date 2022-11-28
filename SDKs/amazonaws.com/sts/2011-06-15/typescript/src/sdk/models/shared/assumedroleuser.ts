import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssumedRoleUser
/** 
 * The identifiers for the temporary security credentials that the operation returns.
**/
export class AssumedRoleUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  assumedRoleId: string;
}

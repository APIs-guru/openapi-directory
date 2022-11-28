import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserLockout
/** 
 * User lockout information
**/
export class UserLockout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=lockoutPeriod" })
  lockoutPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=maxNumberOfLoginFailures" })
  maxNumberOfLoginFailures?: number;
}

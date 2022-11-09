import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserLockout
/** 
 * User lockout information
**/
export class UserLockout extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=lockoutPeriod" })
  lockoutPeriod?: number;

  @Metadata({ data: "json, name=maxNumberOfLoginFailures" })
  maxNumberOfLoginFailures?: number;
}

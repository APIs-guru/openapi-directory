import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User lockout information
**/
export declare class UserLockout extends SpeakeasyBase {
    enabled: boolean;
    lockoutPeriod?: number;
    maxNumberOfLoginFailures?: number;
}

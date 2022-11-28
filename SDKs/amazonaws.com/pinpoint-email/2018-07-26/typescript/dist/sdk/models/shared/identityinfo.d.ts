import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";
/**
 * Information about an email identity.
**/
export declare class IdentityInfo extends SpeakeasyBase {
    identityName?: string;
    identityType?: IdentityTypeEnum;
    sendingEnabled?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { DkimAttributes } from "./dkimattributes";
import { IdentityTypeEnum } from "./identitytypeenum";
/**
 * <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>
**/
export declare class CreateEmailIdentityResponse extends SpeakeasyBase {
    dkimAttributes?: DkimAttributes;
    identityType?: IdentityTypeEnum;
    verifiedForSendingStatus?: boolean;
}

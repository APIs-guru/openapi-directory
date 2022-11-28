import { SpeakeasyBase } from "../../../internal/utils";
import { DkimAttributes } from "./dkimattributes";
import { IdentityTypeEnum } from "./identitytypeenum";
import { MailFromAttributes } from "./mailfromattributes";
import { Tag } from "./tag";
/**
 * Details about an email identity.
**/
export declare class GetEmailIdentityResponse extends SpeakeasyBase {
    configurationSetName?: string;
    dkimAttributes?: DkimAttributes;
    feedbackForwardingStatus?: boolean;
    identityType?: IdentityTypeEnum;
    mailFromAttributes?: MailFromAttributes;
    policies?: Map<string, string>;
    tags?: Tag[];
    verifiedForSendingStatus?: boolean;
}

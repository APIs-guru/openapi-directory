import { SpeakeasyBase } from "../../../internal/utils";
import { ContactDetail } from "./contactdetail";
import { Nameserver } from "./nameserver";
/**
 * The TransferDomain request includes the following elements.
**/
export declare class TransferDomainRequest extends SpeakeasyBase {
    adminContact: ContactDetail;
    authCode?: string;
    autoRenew?: boolean;
    domainName: string;
    durationInYears: number;
    idnLangCode?: string;
    nameservers?: Nameserver[];
    privacyProtectAdminContact?: boolean;
    privacyProtectRegistrantContact?: boolean;
    privacyProtectTechContact?: boolean;
    registrantContact: ContactDetail;
    techContact: ContactDetail;
}

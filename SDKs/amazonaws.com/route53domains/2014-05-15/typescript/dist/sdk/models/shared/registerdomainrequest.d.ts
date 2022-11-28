import { SpeakeasyBase } from "../../../internal/utils";
import { ContactDetail } from "./contactdetail";
/**
 * The RegisterDomain request includes the following elements.
**/
export declare class RegisterDomainRequest extends SpeakeasyBase {
    adminContact: ContactDetail;
    autoRenew?: boolean;
    domainName: string;
    durationInYears: number;
    idnLangCode?: string;
    privacyProtectAdminContact?: boolean;
    privacyProtectRegistrantContact?: boolean;
    privacyProtectTechContact?: boolean;
    registrantContact: ContactDetail;
    techContact: ContactDetail;
}

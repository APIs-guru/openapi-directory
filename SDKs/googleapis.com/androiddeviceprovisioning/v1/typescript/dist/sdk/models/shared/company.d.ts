import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CompanyTermsStatusEnum {
    TermsStatusUnspecified = "TERMS_STATUS_UNSPECIFIED",
    TermsStatusNotAccepted = "TERMS_STATUS_NOT_ACCEPTED",
    TermsStatusAccepted = "TERMS_STATUS_ACCEPTED",
    TermsStatusStale = "TERMS_STATUS_STALE"
}
/**
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
**/
export declare class Company extends SpeakeasyBase {
    adminEmails?: string[];
    companyId?: string;
    companyName?: string;
    languageCode?: string;
    name?: string;
    ownerEmails?: string[];
    skipWelcomeEmail?: boolean;
    termsStatus?: CompanyTermsStatusEnum;
}

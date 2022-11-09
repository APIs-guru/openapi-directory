import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CompanyTermsStatusEnum {
    TermsStatusUnspecified = "TERMS_STATUS_UNSPECIFIED"
,    TermsStatusNotAccepted = "TERMS_STATUS_NOT_ACCEPTED"
,    TermsStatusAccepted = "TERMS_STATUS_ACCEPTED"
,    TermsStatusStale = "TERMS_STATUS_STALE"
}


// Company
/** 
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
**/
export class Company extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminEmails" })
  adminEmails?: string[];

  @Metadata({ data: "json, name=companyId" })
  companyId?: string;

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerEmails" })
  ownerEmails?: string[];

  @Metadata({ data: "json, name=skipWelcomeEmail" })
  skipWelcomeEmail?: boolean;

  @Metadata({ data: "json, name=termsStatus" })
  termsStatus?: CompanyTermsStatusEnum;
}

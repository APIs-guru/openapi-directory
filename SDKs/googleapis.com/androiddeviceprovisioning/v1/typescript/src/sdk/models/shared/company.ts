import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleWorkspaceAccount } from "./googleworkspaceaccount";
import { GoogleWorkspaceAccountInput } from "./googleworkspaceaccount";


export enum CompanyTermsStatusEnum {
    TermsStatusUnspecified = "TERMS_STATUS_UNSPECIFIED",
    TermsStatusNotAccepted = "TERMS_STATUS_NOT_ACCEPTED",
    TermsStatusAccepted = "TERMS_STATUS_ACCEPTED",
    TermsStatusStale = "TERMS_STATUS_STALE"
}


// Company
/** 
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
**/
export class Company extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminEmails" })
  adminEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=googleWorkspaceAccount" })
  googleWorkspaceAccount?: GoogleWorkspaceAccount;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerEmails" })
  ownerEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=skipWelcomeEmail" })
  skipWelcomeEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=termsStatus" })
  termsStatus?: CompanyTermsStatusEnum;
}


// CompanyInput
/** 
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
**/
export class CompanyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminEmails" })
  adminEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=googleWorkspaceAccount" })
  googleWorkspaceAccount?: GoogleWorkspaceAccountInput;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerEmails" })
  ownerEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=skipWelcomeEmail" })
  skipWelcomeEmail?: boolean;
}

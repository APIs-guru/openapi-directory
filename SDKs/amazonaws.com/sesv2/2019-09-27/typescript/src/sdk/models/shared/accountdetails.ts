import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactLanguageEnum } from "./contactlanguageenum";
import { MailTypeEnum } from "./mailtypeenum";
import { ReviewDetails } from "./reviewdetails";


// AccountDetails
/** 
 * An object that contains information about your account details.
**/
export class AccountDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalContactEmailAddresses" })
  additionalContactEmailAddresses?: string[];

  @Metadata({ data: "json, name=ContactLanguage" })
  contactLanguage?: ContactLanguageEnum;

  @Metadata({ data: "json, name=MailType" })
  mailType?: MailTypeEnum;

  @Metadata({ data: "json, name=ReviewDetails" })
  reviewDetails?: ReviewDetails;

  @Metadata({ data: "json, name=UseCaseDescription" })
  useCaseDescription?: string;

  @Metadata({ data: "json, name=WebsiteURL" })
  websiteUrl?: string;
}

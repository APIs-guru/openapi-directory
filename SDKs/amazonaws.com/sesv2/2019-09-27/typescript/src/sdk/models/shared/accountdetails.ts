import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactLanguageEnum } from "./contactlanguageenum";
import { MailTypeEnum } from "./mailtypeenum";
import { ReviewDetails } from "./reviewdetails";



// AccountDetails
/** 
 * An object that contains information about your account details.
**/
export class AccountDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalContactEmailAddresses" })
  additionalContactEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContactLanguage" })
  contactLanguage?: ContactLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=MailType" })
  mailType?: MailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ReviewDetails" })
  reviewDetails?: ReviewDetails;

  @SpeakeasyMetadata({ data: "json, name=UseCaseDescription" })
  useCaseDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=WebsiteURL" })
  websiteUrl?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ContactLanguageEnum } from "./contactlanguageenum";
import { MailTypeEnum } from "./mailtypeenum";
import { ReviewDetails } from "./reviewdetails";
/**
 * An object that contains information about your account details.
**/
export declare class AccountDetails extends SpeakeasyBase {
    additionalContactEmailAddresses?: string[];
    contactLanguage?: ContactLanguageEnum;
    mailType?: MailTypeEnum;
    reviewDetails?: ReviewDetails;
    useCaseDescription?: string;
    websiteUrl?: string;
}

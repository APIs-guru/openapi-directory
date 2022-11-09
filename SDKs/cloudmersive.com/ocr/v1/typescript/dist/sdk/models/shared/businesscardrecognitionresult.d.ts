import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Result of recognizing a business card, to extract the key information from the business card
**/
export declare class BusinessCardRecognitionResult extends SpeakeasyBase {
    addressString?: string;
    businessName?: string;
    emailAddress?: string;
    personName?: string;
    personTitle?: string;
    phoneNumber?: string;
    successful?: boolean;
    timestamp?: Date;
}

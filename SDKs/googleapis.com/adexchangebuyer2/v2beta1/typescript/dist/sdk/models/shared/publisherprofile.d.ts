import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";
import { Seller } from "./seller";
/**
 * Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.
**/
export declare class PublisherProfile extends SpeakeasyBase {
    audienceDescription?: string;
    buyerPitchStatement?: string;
    directDealsContact?: string;
    displayName?: string;
    domains?: string[];
    googlePlusUrl?: string;
    isParent?: boolean;
    logoUrl?: string;
    mediaKitUrl?: string;
    mobileApps?: PublisherProfileMobileApplication[];
    overview?: string;
    programmaticDealsContact?: string;
    publisherProfileId?: string;
    rateCardInfoUrl?: string;
    samplePageUrl?: string;
    seller?: Seller;
    topHeadlines?: string[];
}

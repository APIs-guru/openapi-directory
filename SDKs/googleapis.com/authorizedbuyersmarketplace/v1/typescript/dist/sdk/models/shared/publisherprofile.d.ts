import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";
/**
 * The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.
**/
export declare class PublisherProfile extends SpeakeasyBase {
    audienceDescription?: string;
    directDealsContact?: string;
    displayName?: string;
    domains?: string[];
    isParent?: boolean;
    logoUrl?: string;
    mediaKitUrl?: string;
    mobileApps?: PublisherProfileMobileApplication[];
    name?: string;
    overview?: string;
    pitchStatement?: string;
    programmaticDealsContact?: string;
    publisherCode?: string;
    samplePageUrl?: string;
    topHeadlines?: string[];
}

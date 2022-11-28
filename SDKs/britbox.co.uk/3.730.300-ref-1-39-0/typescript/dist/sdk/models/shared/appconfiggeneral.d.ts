import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppConfigGeneral extends SpeakeasyBase {
    currencyCode?: string;
    customFields?: Map<string, any>;
    defaultTimeZone?: string;
    facebookAppId?: string;
    gaToken?: string;
    itemImageTypes?: Map<string, string>;
    mandatorySignIn?: boolean;
    maxUserRating?: number;
    stripeKey?: string;
    websiteUrl?: string;
}

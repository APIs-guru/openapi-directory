import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The targeting information of this custom channel, if activated.
**/
export declare class CustomChannelTargetingInfo extends SpeakeasyBase {
    adsAppearOn?: string;
    description?: string;
    location?: string;
    siteLanguage?: string;
}
export declare class CustomChannel extends SpeakeasyBase {
    code?: string;
    id?: string;
    kind?: string;
    name?: string;
    targetingInfo?: CustomChannelTargetingInfo;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ExclusionRule } from "./exclusionrule";
export declare enum OfferAvailabilityEnum {
    Available = "Available",
    ComingSoon = "ComingSoon"
}
export declare enum OfferDeliveryTypeEnum {
    Stream = "Stream",
    Download = "Download",
    StreamOrDownload = "StreamOrDownload",
    ProgressiveDownload = "ProgressiveDownload",
    None = "None"
}
export declare enum OfferOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}
export declare enum OfferResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}
export declare class Offer extends SpeakeasyBase {
    availability: OfferAvailabilityEnum;
    customFields?: Map<string, any>;
    deliveryType: OfferDeliveryTypeEnum;
    endDate?: Date;
    exclusionRules?: ExclusionRule[];
    id?: string;
    maxDownloads?: number;
    maxPlays?: number;
    name?: string;
    ownership: OfferOwnershipEnum;
    playPeriod?: number;
    price: number;
    rentalPeriod?: number;
    resolution: OfferResolutionEnum;
    scopes: string[];
    startDate?: Date;
    subscriptionCode?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { ExclusionRule } from "./exclusionrule";
export declare enum EntitlementDeliveryTypeEnum {
    Stream = "Stream",
    Download = "Download",
    StreamOrDownload = "StreamOrDownload",
    ProgressiveDownload = "ProgressiveDownload",
    None = "None"
}
export declare enum EntitlementItemTypeEnum {
    Movie = "movie",
    Show = "show",
    Season = "season",
    Episode = "episode",
    Program = "program",
    Link = "link",
    Trailer = "trailer",
    Channel = "channel",
    CustomAsset = "customAsset"
}
export declare enum EntitlementOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}
export declare enum EntitlementResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}
export declare class Entitlement extends SpeakeasyBase {
    activationDate?: Date;
    classification?: ClassificationSummary;
    creationDate?: Date;
    deliveryType: EntitlementDeliveryTypeEnum;
    exclusionRules?: ExclusionRule[];
    expirationDate?: Date;
    itemId?: string;
    itemType?: EntitlementItemTypeEnum;
    maxDownloads?: number;
    maxPlays?: number;
    mediaDuration?: number;
    ownership: EntitlementOwnershipEnum;
    planId?: string;
    playCount?: number;
    playPeriod?: number;
    remainingDownloads?: number;
    rentalPeriod?: number;
    resolution: EntitlementResolutionEnum;
    scopes: string[];
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ItemPurchaseOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}
export declare enum ItemPurchaseResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}
export declare enum ItemPurchaseTypeEnum {
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
export declare class ItemPurchase extends SpeakeasyBase {
    id: string;
    ownership: ItemPurchaseOwnershipEnum;
    resolution: ItemPurchaseResolutionEnum;
    title: string;
    type: ItemPurchaseTypeEnum;
}

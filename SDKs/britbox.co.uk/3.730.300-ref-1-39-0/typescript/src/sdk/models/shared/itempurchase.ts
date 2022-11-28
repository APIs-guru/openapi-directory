import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ItemPurchaseOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}

export enum ItemPurchaseResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}

export enum ItemPurchaseTypeEnum {
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


export class ItemPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ownership" })
  ownership: ItemPurchaseOwnershipEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: ItemPurchaseResolutionEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ItemPurchaseTypeEnum;
}

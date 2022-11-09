import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ItemPurchaseOwnershipEnum {
    Subscription = "Subscription"
,    Free = "Free"
,    Rent = "Rent"
,    Own = "Own"
,    None = "None"
}

export enum ItemPurchaseResolutionEnum {
    Sd = "SD"
,    Hd720 = "HD-720"
,    Hd1080 = "HD-1080"
,    Hd4K = "HD-4K"
,    External = "External"
,    Unknown = "Unknown"
}

export enum ItemPurchaseTypeEnum {
    Movie = "movie"
,    Show = "show"
,    Season = "season"
,    Episode = "episode"
,    Program = "program"
,    Link = "link"
,    Trailer = "trailer"
,    Channel = "channel"
,    CustomAsset = "customAsset"
}


export class ItemPurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=ownership" })
  ownership: ItemPurchaseOwnershipEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: ItemPurchaseResolutionEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: ItemPurchaseTypeEnum;
}

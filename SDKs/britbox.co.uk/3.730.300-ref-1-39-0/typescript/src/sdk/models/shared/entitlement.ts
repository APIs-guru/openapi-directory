import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { ExclusionRule } from "./exclusionrule";


export enum EntitlementDeliveryTypeEnum {
    Stream = "Stream",
    Download = "Download",
    StreamOrDownload = "StreamOrDownload",
    ProgressiveDownload = "ProgressiveDownload",
    None = "None"
}

export enum EntitlementItemTypeEnum {
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

export enum EntitlementOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}

export enum EntitlementResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}


export class Entitlement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationDate" })
  activationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: ClassificationSummary;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deliveryType" })
  deliveryType: EntitlementDeliveryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=exclusionRules", elemType: ExclusionRule })
  exclusionRules?: ExclusionRule[];

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=itemType" })
  itemType?: EntitlementItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @SpeakeasyMetadata({ data: "json, name=maxPlays" })
  maxPlays?: number;

  @SpeakeasyMetadata({ data: "json, name=mediaDuration" })
  mediaDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=ownership" })
  ownership: EntitlementOwnershipEnum;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=playCount" })
  playCount?: number;

  @SpeakeasyMetadata({ data: "json, name=playPeriod" })
  playPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=remainingDownloads" })
  remainingDownloads?: number;

  @SpeakeasyMetadata({ data: "json, name=rentalPeriod" })
  rentalPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: EntitlementResolutionEnum;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: string[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExclusionRule } from "./exclusionrule";


export enum OfferAvailabilityEnum {
    Available = "Available",
    ComingSoon = "ComingSoon"
}

export enum OfferDeliveryTypeEnum {
    Stream = "Stream",
    Download = "Download",
    StreamOrDownload = "StreamOrDownload",
    ProgressiveDownload = "ProgressiveDownload",
    None = "None"
}

export enum OfferOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}

export enum OfferResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}


export class Offer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability: OfferAvailabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=deliveryType" })
  deliveryType: OfferDeliveryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=exclusionRules", elemType: ExclusionRule })
  exclusionRules?: ExclusionRule[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @SpeakeasyMetadata({ data: "json, name=maxPlays" })
  maxPlays?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownership" })
  ownership: OfferOwnershipEnum;

  @SpeakeasyMetadata({ data: "json, name=playPeriod" })
  playPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=rentalPeriod" })
  rentalPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: OfferResolutionEnum;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: string[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionCode" })
  subscriptionCode?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExclusionRule } from "./exclusionrule";

export enum OfferAvailabilityEnum {
    Available = "Available"
,    ComingSoon = "ComingSoon"
}

export enum OfferDeliveryTypeEnum {
    Stream = "Stream"
,    Download = "Download"
,    StreamOrDownload = "StreamOrDownload"
,    ProgressiveDownload = "ProgressiveDownload"
,    None = "None"
}

export enum OfferOwnershipEnum {
    Subscription = "Subscription"
,    Free = "Free"
,    Rent = "Rent"
,    Own = "Own"
,    None = "None"
}

export enum OfferResolutionEnum {
    Sd = "SD"
,    Hd720 = "HD-720"
,    Hd1080 = "HD-1080"
,    Hd4K = "HD-4K"
,    External = "External"
,    Unknown = "Unknown"
}


export class Offer extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability" })
  availability: OfferAvailabilityEnum;

  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=deliveryType" })
  deliveryType: OfferDeliveryTypeEnum;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=exclusionRules", elemType: shared.ExclusionRule })
  exclusionRules?: ExclusionRule[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @Metadata({ data: "json, name=maxPlays" })
  maxPlays?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownership" })
  ownership: OfferOwnershipEnum;

  @Metadata({ data: "json, name=playPeriod" })
  playPeriod?: number;

  @Metadata({ data: "json, name=price" })
  price: number;

  @Metadata({ data: "json, name=rentalPeriod" })
  rentalPeriod?: number;

  @Metadata({ data: "json, name=resolution" })
  resolution: OfferResolutionEnum;

  @Metadata({ data: "json, name=scopes" })
  scopes: string[];

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=subscriptionCode" })
  subscriptionCode?: string;
}

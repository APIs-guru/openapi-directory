import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MediaFileDeliveryTypeEnum {
    Stream = "Stream",
    Progressive = "Progressive",
    Download = "Download"
}

export enum MediaFileResolutionEnum1 {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}


export class MediaFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: number;

  @SpeakeasyMetadata({ data: "json, name=deliveryType" })
  deliveryType: MediaFileDeliveryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=drm" })
  drm: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: MediaFileResolutionEnum1;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}

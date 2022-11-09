import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MediaFileDeliveryTypeEnum {
    Stream = "Stream"
,    Progressive = "Progressive"
,    Download = "Download"
}

export enum MediaFileResolutionEnum1 {
    Sd = "SD"
,    Hd720 = "HD-720"
,    Hd1080 = "HD-1080"
,    Hd4K = "HD-4K"
,    External = "External"
,    Unknown = "Unknown"
}


export class MediaFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels" })
  channels?: number;

  @Metadata({ data: "json, name=deliveryType" })
  deliveryType: MediaFileDeliveryTypeEnum;

  @Metadata({ data: "json, name=drm" })
  drm: string;

  @Metadata({ data: "json, name=format" })
  format: string;

  @Metadata({ data: "json, name=height" })
  height: number;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=resolution" })
  resolution: MediaFileResolutionEnum1;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=width" })
  width: number;
}

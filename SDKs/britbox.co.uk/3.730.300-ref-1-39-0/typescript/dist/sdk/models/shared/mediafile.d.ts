import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MediaFileDeliveryTypeEnum {
    Stream = "Stream",
    Progressive = "Progressive",
    Download = "Download"
}
export declare enum MediaFileResolutionEnum1 {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}
export declare class MediaFile extends SpeakeasyBase {
    channels?: number;
    deliveryType: MediaFileDeliveryTypeEnum;
    drm: string;
    format: string;
    height: number;
    language: string;
    name: string;
    resolution: MediaFileResolutionEnum1;
    url: string;
    width: number;
}

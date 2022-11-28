import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceMetadata } from "./devicemetadata";
import { Timestamp } from "./timestamp";
export declare class UserComment extends SpeakeasyBase {
    androidOsVersion?: number;
    appVersionCode?: number;
    appVersionName?: string;
    device?: string;
    deviceMetadata?: DeviceMetadata;
    lastModified?: Timestamp;
    originalText?: string;
    reviewerLanguage?: string;
    starRating?: number;
    text?: string;
    thumbsDownCount?: number;
    thumbsUpCount?: number;
}

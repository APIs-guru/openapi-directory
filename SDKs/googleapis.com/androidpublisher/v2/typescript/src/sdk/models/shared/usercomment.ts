import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceMetadata } from "./devicemetadata";
import { Timestamp } from "./timestamp";



export class UserComment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  androidOsVersion?: number;

  @SpeakeasyMetadata()
  appVersionCode?: number;

  @SpeakeasyMetadata()
  appVersionName?: string;

  @SpeakeasyMetadata()
  device?: string;

  @SpeakeasyMetadata()
  deviceMetadata?: DeviceMetadata;

  @SpeakeasyMetadata()
  lastModified?: Timestamp;

  @SpeakeasyMetadata()
  originalText?: string;

  @SpeakeasyMetadata()
  reviewerLanguage?: string;

  @SpeakeasyMetadata()
  starRating?: number;

  @SpeakeasyMetadata()
  text?: string;

  @SpeakeasyMetadata()
  thumbsDownCount?: number;

  @SpeakeasyMetadata()
  thumbsUpCount?: number;
}

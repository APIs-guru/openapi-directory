import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceMetadata } from "./devicemetadata";
import { Timestamp } from "./timestamp";



// UserComment
/** 
 * User entry from conversation between user and developer.
**/
export class UserComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidOsVersion" })
  androidOsVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=appVersionCode" })
  appVersionCode?: number;

  @SpeakeasyMetadata({ data: "json, name=appVersionName" })
  appVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=originalText" })
  originalText?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewerLanguage" })
  reviewerLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=starRating" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbsDownCount" })
  thumbsDownCount?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbsUpCount" })
  thumbsUpCount?: number;
}

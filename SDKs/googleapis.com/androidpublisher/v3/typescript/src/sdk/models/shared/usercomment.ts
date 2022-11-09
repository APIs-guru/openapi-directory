import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceMetadata } from "./devicemetadata";
import { Timestamp } from "./timestamp";


// UserComment
/** 
 * User entry from conversation between user and developer.
**/
export class UserComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidOsVersion" })
  androidOsVersion?: number;

  @Metadata({ data: "json, name=appVersionCode" })
  appVersionCode?: number;

  @Metadata({ data: "json, name=appVersionName" })
  appVersionName?: string;

  @Metadata({ data: "json, name=device" })
  device?: string;

  @Metadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Timestamp;

  @Metadata({ data: "json, name=originalText" })
  originalText?: string;

  @Metadata({ data: "json, name=reviewerLanguage" })
  reviewerLanguage?: string;

  @Metadata({ data: "json, name=starRating" })
  starRating?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=thumbsDownCount" })
  thumbsDownCount?: number;

  @Metadata({ data: "json, name=thumbsUpCount" })
  thumbsUpCount?: number;
}

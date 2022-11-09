import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlatformContextPlatformsEnum {
    Desktop = "DESKTOP"
,    Android = "ANDROID"
,    Ios = "IOS"
}


// PlatformContext
/** 
 * Output only. The type of platform the restriction applies to.
**/
export class PlatformContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=platforms" })
  platforms?: PlatformContextPlatformsEnum[];
}

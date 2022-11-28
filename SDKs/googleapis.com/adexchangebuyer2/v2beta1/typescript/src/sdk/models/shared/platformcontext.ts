import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlatformContextPlatformsEnum {
    Desktop = "DESKTOP",
    Android = "ANDROID",
    Ios = "IOS"
}


// PlatformContext
/** 
 * Output only. The type of platform the restriction applies to.
**/
export class PlatformContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=platforms" })
  platforms?: PlatformContextPlatformsEnum[];
}

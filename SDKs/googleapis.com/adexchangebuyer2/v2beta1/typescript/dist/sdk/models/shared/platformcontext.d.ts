import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlatformContextPlatformsEnum {
    Desktop = "DESKTOP",
    Android = "ANDROID",
    Ios = "IOS"
}
/**
 * Output only. The type of platform the restriction applies to.
**/
export declare class PlatformContext extends SpeakeasyBase {
    platforms?: PlatformContextPlatformsEnum[];
}

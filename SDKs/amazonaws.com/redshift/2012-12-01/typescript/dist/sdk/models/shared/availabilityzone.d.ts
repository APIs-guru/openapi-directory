import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedPlatform } from "./supportedplatform";
/**
 * Describes an availability zone.
**/
export declare class AvailabilityZone extends SpeakeasyBase {
    name?: string;
    supportedPlatforms?: SupportedPlatform[];
}

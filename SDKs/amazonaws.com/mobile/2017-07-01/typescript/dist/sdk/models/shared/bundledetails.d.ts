import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformEnum } from "./platformenum";
/**
 *  The details of the bundle.
**/
export declare class BundleDetails extends SpeakeasyBase {
    availablePlatforms?: PlatformEnum[];
    bundleId?: string;
    description?: string;
    iconUrl?: string;
    title?: string;
    version?: string;
}

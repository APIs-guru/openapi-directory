import { SpeakeasyBase } from "../../../internal/utils";
import { SetDimension } from "./setdimension";
/**
 * Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.
**/
export declare class SegmentDemographics extends SpeakeasyBase {
    appVersion?: SetDimension;
    channel?: SetDimension;
    deviceType?: SetDimension;
    make?: SetDimension;
    model?: SetDimension;
    platform?: SetDimension;
}

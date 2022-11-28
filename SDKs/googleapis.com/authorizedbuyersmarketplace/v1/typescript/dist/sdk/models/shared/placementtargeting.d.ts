import { SpeakeasyBase } from "../../../internal/utils";
import { MobileApplicationTargeting } from "./mobileapplicationtargeting";
import { UriTargeting } from "./uritargeting";
/**
 * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
**/
export declare class PlacementTargeting extends SpeakeasyBase {
    mobileApplicationTargeting?: MobileApplicationTargeting;
    uriTargeting?: UriTargeting;
}

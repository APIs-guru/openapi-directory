import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
/**
 * Defines the basic information about a patch baseline.
**/
export declare class PatchBaselineIdentity extends SpeakeasyBase {
    baselineDescription?: string;
    baselineId?: string;
    baselineName?: string;
    defaultBaseline?: boolean;
    operatingSystem?: OperatingSystemEnum;
}

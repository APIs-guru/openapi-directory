import { SpeakeasyBase } from "../../../internal/utils";
import { ScaleInPolicy } from "./scaleinpolicy";
import { ScaleOutPolicy } from "./scaleoutpolicy";
/**
 * Specifies how the connector scales.
**/
export declare class AutoScaling extends SpeakeasyBase {
    maxWorkerCount: number;
    mcuCount: number;
    minWorkerCount: number;
    scaleInPolicy?: ScaleInPolicy;
    scaleOutPolicy?: ScaleOutPolicy;
}

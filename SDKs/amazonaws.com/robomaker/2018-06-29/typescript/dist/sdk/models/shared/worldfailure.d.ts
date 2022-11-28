import { SpeakeasyBase } from "../../../internal/utils";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";
/**
 * Information about a failed world.
**/
export declare class WorldFailure extends SpeakeasyBase {
    failureCode?: WorldGenerationJobErrorCodeEnum;
    failureCount?: number;
    sampleFailureReason?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Workload } from "./workload";
/**
 * A milestone return object.
**/
export declare class Milestone extends SpeakeasyBase {
    milestoneName?: string;
    milestoneNumber?: number;
    recordedAt?: Date;
    workload?: Workload;
}

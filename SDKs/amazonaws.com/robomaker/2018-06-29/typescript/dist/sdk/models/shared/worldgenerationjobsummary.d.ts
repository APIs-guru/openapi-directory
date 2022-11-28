import { SpeakeasyBase } from "../../../internal/utils";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
import { WorldCount } from "./worldcount";
/**
 * Information about a world generator job.
**/
export declare class WorldGenerationJobSummary extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    failedWorldCount?: number;
    status?: WorldGenerationJobStatusEnum;
    succeededWorldCount?: number;
    template?: string;
    worldCount?: WorldCount;
}

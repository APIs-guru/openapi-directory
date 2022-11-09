import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldExportJobStatusEnum } from "./worldexportjobstatusenum";
/**
 * Information about a world export job.
**/
export declare class WorldExportJobSummary extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    status?: WorldExportJobStatusEnum;
    worlds?: string[];
}

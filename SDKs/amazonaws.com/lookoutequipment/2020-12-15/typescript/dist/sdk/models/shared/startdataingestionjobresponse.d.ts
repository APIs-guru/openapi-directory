import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";
export declare class StartDataIngestionJobResponse extends SpeakeasyBase {
    jobId?: string;
    status?: IngestionJobStatusEnum;
}

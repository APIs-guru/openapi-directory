import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";
export declare class ListDataIngestionJobsRequest extends SpeakeasyBase {
    datasetName?: string;
    maxResults?: number;
    nextToken?: string;
    status?: IngestionJobStatusEnum;
}

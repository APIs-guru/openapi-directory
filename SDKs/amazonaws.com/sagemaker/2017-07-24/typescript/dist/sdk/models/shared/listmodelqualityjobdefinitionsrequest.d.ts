import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringJobDefinitionSortKeyEnum } from "./monitoringjobdefinitionsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListModelQualityJobDefinitionsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    endpointName?: string;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: MonitoringJobDefinitionSortKeyEnum;
    sortOrder?: SortOrderEnum;
}

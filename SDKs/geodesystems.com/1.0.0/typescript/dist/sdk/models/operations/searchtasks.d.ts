import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTasksQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbTasksAssignedto?: string;
    searchDbTasksComplete?: number;
    searchDbTasksEnddate?: string;
    searchDbTasksPriority?: string;
    searchDbTasksStartdate?: string;
    searchDbTasksStatus?: string;
    searchDbTasksTitle?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTasksRequest extends SpeakeasyBase {
    queryParams: SearchTasksQueryParams;
}
export declare class SearchTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

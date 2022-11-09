import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchIncidentQueryParams extends SpeakeasyBase {
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
    searchIncidentCause?: string;
    searchIncidentIncidenttype?: string;
    searchIncidentState?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchIncidentRequest extends SpeakeasyBase {
    queryParams: SearchIncidentQueryParams;
}
export declare class SearchIncidentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

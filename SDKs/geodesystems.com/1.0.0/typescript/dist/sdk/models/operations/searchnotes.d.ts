import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchNotesQueryParams extends SpeakeasyBase {
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
    searchDbNotesNote?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchNotesRequest extends SpeakeasyBase {
    queryParams: SearchNotesQueryParams;
}
export declare class SearchNotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

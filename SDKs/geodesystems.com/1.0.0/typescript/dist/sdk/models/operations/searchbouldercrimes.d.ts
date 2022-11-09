import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBoulderCrimesQueryParams extends SpeakeasyBase {
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
    searchDbBoulderCrimesBlockadd?: string;
    searchDbBoulderCrimesLocation?: string;
    searchDbBoulderCrimesOffense?: string;
    searchDbBoulderCrimesReportdate?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBoulderCrimesRequest extends SpeakeasyBase {
    queryParams: SearchBoulderCrimesQueryParams;
}
export declare class SearchBoulderCrimesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

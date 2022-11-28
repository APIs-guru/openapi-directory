import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchBioHmmerIndexQueryParams extends SpeakeasyBase {
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
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBioHmmerIndexRequest extends SpeakeasyBase {
    queryParams: SearchBioHmmerIndexQueryParams;
}
export declare class SearchBioHmmerIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

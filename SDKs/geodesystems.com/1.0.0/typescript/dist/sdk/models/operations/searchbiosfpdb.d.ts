import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBioSfPdbQueryParams extends SpeakeasyBase {
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
export declare class SearchBioSfPdbRequest extends SpeakeasyBase {
    queryParams: SearchBioSfPdbQueryParams;
}
export declare class SearchBioSfPdbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

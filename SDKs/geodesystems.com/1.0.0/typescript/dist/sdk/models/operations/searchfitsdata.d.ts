import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchFitsDataQueryParams extends SpeakeasyBase {
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
    searchFitsDataInstrument?: string;
    searchFitsDataOrigin?: string;
    searchFitsDataTelescope?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchFitsDataRequest extends SpeakeasyBase {
    queryParams: SearchFitsDataQueryParams;
}
export declare class SearchFitsDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

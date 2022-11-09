import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchGazeteerCountiesQueryParams extends SpeakeasyBase {
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
    searchDbGazeteerCountiesAreaLand?: number;
    searchDbGazeteerCountiesAreaWater?: number;
    searchDbGazeteerCountiesCountyFips?: string;
    searchDbGazeteerCountiesCountyName?: string;
    searchDbGazeteerCountiesFullCountyFips?: string;
    searchDbGazeteerCountiesLocation?: string;
    searchDbGazeteerCountiesStateAbbreviation?: string;
    searchDbGazeteerCountiesStateFips?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchGazeteerCountiesRequest extends SpeakeasyBase {
    queryParams: SearchGazeteerCountiesQueryParams;
}
export declare class SearchGazeteerCountiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

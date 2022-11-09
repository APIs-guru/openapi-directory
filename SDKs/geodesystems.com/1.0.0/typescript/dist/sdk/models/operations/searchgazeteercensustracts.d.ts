import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchGazeteerCensusTractsQueryParams extends SpeakeasyBase {
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
    searchDbGazeteerCensusTractsCensusTractId?: string;
    searchDbGazeteerCensusTractsCountyFips?: string;
    searchDbGazeteerCensusTractsCountyName?: string;
    searchDbGazeteerCensusTractsFullCensusTractId?: string;
    searchDbGazeteerCensusTractsLandArea?: number;
    searchDbGazeteerCensusTractsLocation?: string;
    searchDbGazeteerCensusTractsState?: string;
    searchDbGazeteerCensusTractsStateFips?: string;
    searchDbGazeteerCensusTractsWaterArea?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchGazeteerCensusTractsRequest extends SpeakeasyBase {
    queryParams: SearchGazeteerCensusTractsQueryParams;
}
export declare class SearchGazeteerCensusTractsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

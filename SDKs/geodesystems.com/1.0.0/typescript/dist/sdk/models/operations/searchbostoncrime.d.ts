import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBostonCrimeQueryParams extends SpeakeasyBase {
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
    searchDbBostonCrimeDayOfWeek?: string;
    searchDbBostonCrimeDistrict?: string;
    searchDbBostonCrimeHour?: number;
    searchDbBostonCrimeLocation?: string;
    searchDbBostonCrimeMonth?: number;
    searchDbBostonCrimeOffense?: string;
    searchDbBostonCrimeOffenseCodeGroup?: string;
    searchDbBostonCrimeOffenseDescription?: string;
    searchDbBostonCrimeReportingArea?: string;
    searchDbBostonCrimeShooting?: string;
    searchDbBostonCrimeStreet?: string;
    searchDbBostonCrimeYear?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBostonCrimeRequest extends SpeakeasyBase {
    queryParams: SearchBostonCrimeQueryParams;
}
export declare class SearchBostonCrimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

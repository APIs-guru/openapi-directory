import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchPropertydbQueryParams extends SpeakeasyBase {
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
    searchDbPropertydbAddress?: string;
    searchDbPropertydbBuildingType?: string;
    searchDbPropertydbCity?: string;
    searchDbPropertydbHouseSize?: number;
    searchDbPropertydbLocation?: string;
    searchDbPropertydbLotAcres?: number;
    searchDbPropertydbLotSqft?: number;
    searchDbPropertydbOwner?: string;
    searchDbPropertydbPriceSqft?: number;
    searchDbPropertydbPropertyId?: string;
    searchDbPropertydbState?: string;
    searchDbPropertydbValue?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchPropertydbRequest extends SpeakeasyBase {
    queryParams: SearchPropertydbQueryParams;
}
export declare class SearchPropertydbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

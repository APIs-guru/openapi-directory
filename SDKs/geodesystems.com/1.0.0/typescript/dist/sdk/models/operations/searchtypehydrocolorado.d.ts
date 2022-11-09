import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypeHydroColoradoQueryParams extends SpeakeasyBase {
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
    searchTypeHydroColoradoSiteId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeHydroColoradoRequest extends SpeakeasyBase {
    queryParams: SearchTypeHydroColoradoQueryParams;
}
export declare class SearchTypeHydroColoradoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

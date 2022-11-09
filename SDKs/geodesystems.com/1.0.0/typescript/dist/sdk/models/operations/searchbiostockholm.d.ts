import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBioStockholmQueryParams extends SpeakeasyBase {
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
export declare class SearchBioStockholmRequest extends SpeakeasyBase {
    queryParams: SearchBioStockholmQueryParams;
}
export declare class SearchBioStockholmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

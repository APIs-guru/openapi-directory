import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypeEsriImageserverQueryParams extends SpeakeasyBase {
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
export declare class SearchTypeEsriImageserverRequest extends SpeakeasyBase {
    queryParams: SearchTypeEsriImageserverQueryParams;
}
export declare class SearchTypeEsriImageserverResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeEsriLayerQueryParams extends SpeakeasyBase {
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
    searchTypeEsriLayerLayerType?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeEsriLayerRequest extends SpeakeasyBase {
    queryParams: SearchTypeEsriLayerQueryParams;
}
export declare class SearchTypeEsriLayerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

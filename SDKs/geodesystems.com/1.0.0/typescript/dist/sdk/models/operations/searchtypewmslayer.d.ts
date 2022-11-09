import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypeWmsLayerQueryParams extends SpeakeasyBase {
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
export declare class SearchTypeWmsLayerRequest extends SpeakeasyBase {
    queryParams: SearchTypeWmsLayerQueryParams;
}
export declare class SearchTypeWmsLayerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

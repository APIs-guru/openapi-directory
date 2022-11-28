import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeEsriFeatureserverQueryParams extends SpeakeasyBase {
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
export declare class SearchTypeEsriFeatureserverRequest extends SpeakeasyBase {
    queryParams: SearchTypeEsriFeatureserverQueryParams;
}
export declare class SearchTypeEsriFeatureserverResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

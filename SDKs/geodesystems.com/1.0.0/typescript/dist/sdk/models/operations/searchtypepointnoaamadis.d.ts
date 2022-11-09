import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointNoaaMadisQueryParams extends SpeakeasyBase {
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
export declare class SearchTypePointNoaaMadisRequest extends SpeakeasyBase {
    queryParams: SearchTypePointNoaaMadisQueryParams;
}
export declare class SearchTypePointNoaaMadisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

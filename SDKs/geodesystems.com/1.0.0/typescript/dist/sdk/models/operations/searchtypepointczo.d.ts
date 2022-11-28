import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointCzoQueryParams extends SpeakeasyBase {
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
export declare class SearchTypePointCzoRequest extends SpeakeasyBase {
    queryParams: SearchTypePointCzoQueryParams;
}
export declare class SearchTypePointCzoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointTextQueryParams extends SpeakeasyBase {
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
export declare class SearchTypePointTextRequest extends SpeakeasyBase {
    queryParams: SearchTypePointTextQueryParams;
}
export declare class SearchTypePointTextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchMediaImageloopQueryParams extends SpeakeasyBase {
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
export declare class SearchMediaImageloopRequest extends SpeakeasyBase {
    queryParams: SearchMediaImageloopQueryParams;
}
export declare class SearchMediaImageloopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

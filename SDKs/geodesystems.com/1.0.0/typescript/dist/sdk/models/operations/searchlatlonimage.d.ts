import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchLatlonimageQueryParams extends SpeakeasyBase {
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
export declare class SearchLatlonimageRequest extends SpeakeasyBase {
    queryParams: SearchLatlonimageQueryParams;
}
export declare class SearchLatlonimageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

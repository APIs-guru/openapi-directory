import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchLidarLvisQueryParams extends SpeakeasyBase {
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
export declare class SearchLidarLvisRequest extends SpeakeasyBase {
    queryParams: SearchLidarLvisQueryParams;
}
export declare class SearchLidarLvisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

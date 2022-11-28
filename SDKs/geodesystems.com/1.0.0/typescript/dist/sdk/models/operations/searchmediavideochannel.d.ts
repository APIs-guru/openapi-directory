import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchMediaVideoChannelQueryParams extends SpeakeasyBase {
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
export declare class SearchMediaVideoChannelRequest extends SpeakeasyBase {
    queryParams: SearchMediaVideoChannelQueryParams;
}
export declare class SearchMediaVideoChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

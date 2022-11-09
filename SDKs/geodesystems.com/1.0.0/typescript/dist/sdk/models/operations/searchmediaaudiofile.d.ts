import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchMediaAudiofileQueryParams extends SpeakeasyBase {
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
export declare class SearchMediaAudiofileRequest extends SpeakeasyBase {
    queryParams: SearchMediaAudiofileQueryParams;
}
export declare class SearchMediaAudiofileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

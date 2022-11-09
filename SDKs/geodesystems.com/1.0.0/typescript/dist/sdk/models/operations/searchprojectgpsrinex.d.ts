import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchProjectGpsRinexQueryParams extends SpeakeasyBase {
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
export declare class SearchProjectGpsRinexRequest extends SpeakeasyBase {
    queryParams: SearchProjectGpsRinexQueryParams;
}
export declare class SearchProjectGpsRinexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchProjectServiceQueryParams extends SpeakeasyBase {
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
    searchProjectServiceProvider?: string;
    searchProjectServiceServiceType?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectServiceRequest extends SpeakeasyBase {
    queryParams: SearchProjectServiceQueryParams;
}
export declare class SearchProjectServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

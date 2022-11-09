import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchProjectDataformatQueryParams extends SpeakeasyBase {
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
    searchProjectDataformatDataType?: string;
    searchProjectDataformatField?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectDataformatRequest extends SpeakeasyBase {
    queryParams: SearchProjectDataformatQueryParams;
}
export declare class SearchProjectDataformatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

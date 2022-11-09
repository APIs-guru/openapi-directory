import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchProjectDatasetQueryParams extends SpeakeasyBase {
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
    searchProjectDatasetDataLevel?: string;
    searchProjectDatasetDataType?: string;
    searchProjectDatasetDatasetId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectDatasetRequest extends SpeakeasyBase {
    queryParams: SearchProjectDatasetQueryParams;
}
export declare class SearchProjectDatasetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

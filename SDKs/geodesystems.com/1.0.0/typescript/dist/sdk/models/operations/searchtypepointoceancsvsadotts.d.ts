import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointOceanCsvSadoTtsQueryParams extends SpeakeasyBase {
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
export declare class SearchTypePointOceanCsvSadoTtsRequest extends SpeakeasyBase {
    queryParams: SearchTypePointOceanCsvSadoTtsQueryParams;
}
export declare class SearchTypePointOceanCsvSadoTtsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

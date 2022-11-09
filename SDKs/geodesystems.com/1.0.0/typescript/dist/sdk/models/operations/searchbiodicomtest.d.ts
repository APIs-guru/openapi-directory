import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBioDicomTestQueryParams extends SpeakeasyBase {
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
    searchBioDicomTestPatientId?: string;
    searchBioDicomTestPatientName?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBioDicomTestRequest extends SpeakeasyBase {
    queryParams: SearchBioDicomTestQueryParams;
}
export declare class SearchBioDicomTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

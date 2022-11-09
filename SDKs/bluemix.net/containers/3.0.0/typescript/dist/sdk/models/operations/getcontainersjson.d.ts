import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetContainersJsonQueryParams extends SpeakeasyBase {
    all?: string;
    filters?: string;
}
export declare class GetContainersJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersJsonRequest extends SpeakeasyBase {
    queryParams: GetContainersJsonQueryParams;
    headers: GetContainersJsonHeaders;
}
export declare class GetContainersJsonResponse extends SpeakeasyBase {
    containers?: any[];
    contentType: string;
    statusCode: number;
}

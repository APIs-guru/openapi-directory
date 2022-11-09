import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetContainersFloatingIpsQueryParams extends SpeakeasyBase {
    all?: boolean;
}
export declare class GetContainersFloatingIpsHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersFloatingIpsRequest extends SpeakeasyBase {
    queryParams: GetContainersFloatingIpsQueryParams;
    headers: GetContainersFloatingIpsHeaders;
}
export declare class GetContainersFloatingIpsResponse extends SpeakeasyBase {
    contentType: string;
    floatingIps?: any[];
    statusCode: number;
}

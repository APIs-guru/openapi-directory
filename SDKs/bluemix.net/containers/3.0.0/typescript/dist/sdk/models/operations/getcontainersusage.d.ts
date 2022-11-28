import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContainersUsageHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersUsageRequest extends SpeakeasyBase {
    headers: GetContainersUsageHeaders;
}
export declare class GetContainersUsageResponse extends SpeakeasyBase {
    containersUsageInfo?: any;
    contentType: string;
    statusCode: number;
}

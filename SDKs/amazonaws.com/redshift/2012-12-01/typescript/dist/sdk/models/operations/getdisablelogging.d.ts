import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisableLoggingActionEnum {
    DisableLogging = "DisableLogging"
}
export declare enum GetDisableLoggingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDisableLoggingQueryParams extends SpeakeasyBase {
    action: GetDisableLoggingActionEnum;
    clusterIdentifier: string;
    version: GetDisableLoggingVersionEnum;
}
export declare class GetDisableLoggingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableLoggingRequest extends SpeakeasyBase {
    queryParams: GetDisableLoggingQueryParams;
    headers: GetDisableLoggingHeaders;
}
export declare class GetDisableLoggingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

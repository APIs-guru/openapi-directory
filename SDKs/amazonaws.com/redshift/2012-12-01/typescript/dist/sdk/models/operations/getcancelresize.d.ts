import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCancelResizeActionEnum {
    CancelResize = "CancelResize"
}
export declare enum GetCancelResizeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetCancelResizeQueryParams extends SpeakeasyBase {
    action: GetCancelResizeActionEnum;
    clusterIdentifier: string;
    version: GetCancelResizeVersionEnum;
}
export declare class GetCancelResizeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelResizeRequest extends SpeakeasyBase {
    queryParams: GetCancelResizeQueryParams;
    headers: GetCancelResizeHeaders;
}
export declare class GetCancelResizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

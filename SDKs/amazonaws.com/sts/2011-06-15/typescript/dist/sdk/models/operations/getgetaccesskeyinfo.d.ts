import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetAccessKeyInfoActionEnum {
    GetAccessKeyInfo = "GetAccessKeyInfo"
}
export declare enum GetGetAccessKeyInfoVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class GetGetAccessKeyInfoQueryParams extends SpeakeasyBase {
    accessKeyId: string;
    action: GetGetAccessKeyInfoActionEnum;
    version: GetGetAccessKeyInfoVersionEnum;
}
export declare class GetGetAccessKeyInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetAccessKeyInfoRequest extends SpeakeasyBase {
    queryParams: GetGetAccessKeyInfoQueryParams;
    headers: GetGetAccessKeyInfoHeaders;
}
export declare class GetGetAccessKeyInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

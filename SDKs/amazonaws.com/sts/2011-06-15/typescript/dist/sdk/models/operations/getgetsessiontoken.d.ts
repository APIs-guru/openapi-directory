import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetSessionTokenActionEnum {
    GetSessionToken = "GetSessionToken"
}
export declare enum GetGetSessionTokenVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class GetGetSessionTokenQueryParams extends SpeakeasyBase {
    action: GetGetSessionTokenActionEnum;
    durationSeconds?: number;
    serialNumber?: string;
    tokenCode?: string;
    version: GetGetSessionTokenVersionEnum;
}
export declare class GetGetSessionTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetSessionTokenRequest extends SpeakeasyBase {
    queryParams: GetGetSessionTokenQueryParams;
    headers: GetGetSessionTokenHeaders;
}
export declare class GetGetSessionTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

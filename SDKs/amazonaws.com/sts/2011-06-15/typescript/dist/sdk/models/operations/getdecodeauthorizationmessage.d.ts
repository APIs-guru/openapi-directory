import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDecodeAuthorizationMessageActionEnum {
    DecodeAuthorizationMessage = "DecodeAuthorizationMessage"
}
export declare enum GetDecodeAuthorizationMessageVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class GetDecodeAuthorizationMessageQueryParams extends SpeakeasyBase {
    action: GetDecodeAuthorizationMessageActionEnum;
    encodedMessage: string;
    version: GetDecodeAuthorizationMessageVersionEnum;
}
export declare class GetDecodeAuthorizationMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDecodeAuthorizationMessageRequest extends SpeakeasyBase {
    queryParams: GetDecodeAuthorizationMessageQueryParams;
    headers: GetDecodeAuthorizationMessageHeaders;
}
export declare class GetDecodeAuthorizationMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

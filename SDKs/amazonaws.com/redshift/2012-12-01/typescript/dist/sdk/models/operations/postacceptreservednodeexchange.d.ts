import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAcceptReservedNodeExchangeActionEnum {
    AcceptReservedNodeExchange = "AcceptReservedNodeExchange"
}
export declare enum PostAcceptReservedNodeExchangeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostAcceptReservedNodeExchangeQueryParams extends SpeakeasyBase {
    action: PostAcceptReservedNodeExchangeActionEnum;
    version: PostAcceptReservedNodeExchangeVersionEnum;
}
export declare class PostAcceptReservedNodeExchangeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAcceptReservedNodeExchangeRequest extends SpeakeasyBase {
    queryParams: PostAcceptReservedNodeExchangeQueryParams;
    headers: PostAcceptReservedNodeExchangeHeaders;
    request?: Uint8Array;
}
export declare class PostAcceptReservedNodeExchangeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

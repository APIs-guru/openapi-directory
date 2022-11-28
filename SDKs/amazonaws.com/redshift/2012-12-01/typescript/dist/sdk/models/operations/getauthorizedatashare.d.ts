import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAuthorizeDataShareActionEnum {
    AuthorizeDataShare = "AuthorizeDataShare"
}
export declare enum GetAuthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetAuthorizeDataShareQueryParams extends SpeakeasyBase {
    action: GetAuthorizeDataShareActionEnum;
    consumerIdentifier: string;
    dataShareArn: string;
    version: GetAuthorizeDataShareVersionEnum;
}
export declare class GetAuthorizeDataShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizeDataShareRequest extends SpeakeasyBase {
    queryParams: GetAuthorizeDataShareQueryParams;
    headers: GetAuthorizeDataShareHeaders;
}
export declare class GetAuthorizeDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

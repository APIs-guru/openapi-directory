import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbProxyActionEnum {
    DeleteDbProxy = "DeleteDBProxy"
}
export declare enum GetDeleteDbProxyVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteDbProxyQueryParams extends SpeakeasyBase {
    action: GetDeleteDbProxyActionEnum;
    dbProxyName: string;
    version: GetDeleteDbProxyVersionEnum;
}
export declare class GetDeleteDbProxyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbProxyRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbProxyQueryParams;
    headers: GetDeleteDbProxyHeaders;
}
export declare class GetDeleteDbProxyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

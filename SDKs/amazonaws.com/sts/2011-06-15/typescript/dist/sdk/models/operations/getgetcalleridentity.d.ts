import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetCallerIdentityActionEnum {
    GetCallerIdentity = "GetCallerIdentity"
}
export declare enum GetGetCallerIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class GetGetCallerIdentityQueryParams extends SpeakeasyBase {
    action: GetGetCallerIdentityActionEnum;
    version: GetGetCallerIdentityVersionEnum;
}
export declare class GetGetCallerIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetCallerIdentityRequest extends SpeakeasyBase {
    queryParams: GetGetCallerIdentityQueryParams;
    headers: GetGetCallerIdentityHeaders;
}
export declare class GetGetCallerIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

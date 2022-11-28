import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddPermissionActionEnum {
    AddPermission = "AddPermission"
}
export declare enum PostAddPermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostAddPermissionQueryParams extends SpeakeasyBase {
    action: PostAddPermissionActionEnum;
    version: PostAddPermissionVersionEnum;
}
export declare class PostAddPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddPermissionRequest extends SpeakeasyBase {
    queryParams: PostAddPermissionQueryParams;
    headers: PostAddPermissionHeaders;
    request?: Uint8Array;
}
export declare class PostAddPermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

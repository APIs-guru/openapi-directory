import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRemovePermissionActionEnum {
    RemovePermission = "RemovePermission"
}
export declare enum PostRemovePermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostRemovePermissionQueryParams extends SpeakeasyBase {
    action: PostRemovePermissionActionEnum;
    version: PostRemovePermissionVersionEnum;
}
export declare class PostRemovePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemovePermissionRequest extends SpeakeasyBase {
    queryParams: PostRemovePermissionQueryParams;
    headers: PostRemovePermissionHeaders;
    request?: Uint8Array;
}
export declare class PostRemovePermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

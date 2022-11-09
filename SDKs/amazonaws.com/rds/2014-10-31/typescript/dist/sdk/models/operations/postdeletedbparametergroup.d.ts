import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDbParameterGroupActionEnum {
    DeleteDbParameterGroup = "DeleteDBParameterGroup"
}
export declare enum PostDeleteDbParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteDbParameterGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteDbParameterGroupActionEnum;
    version: PostDeleteDbParameterGroupVersionEnum;
}
export declare class PostDeleteDbParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbParameterGroupQueryParams;
    headers: PostDeleteDbParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

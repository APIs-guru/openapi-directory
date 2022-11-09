import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCopyDbParameterGroupActionEnum {
    CopyDbParameterGroup = "CopyDBParameterGroup"
}
export declare enum PostCopyDbParameterGroupVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostCopyDbParameterGroupQueryParams extends SpeakeasyBase {
    action: PostCopyDbParameterGroupActionEnum;
    version: PostCopyDbParameterGroupVersionEnum;
}
export declare class PostCopyDbParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopyDbParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostCopyDbParameterGroupQueryParams;
    headers: PostCopyDbParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCopyDbParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

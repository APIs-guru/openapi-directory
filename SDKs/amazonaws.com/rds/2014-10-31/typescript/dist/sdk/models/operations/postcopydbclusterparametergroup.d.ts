import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCopyDbClusterParameterGroupActionEnum {
    CopyDbClusterParameterGroup = "CopyDBClusterParameterGroup"
}
export declare enum PostCopyDbClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCopyDbClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostCopyDbClusterParameterGroupActionEnum;
    version: PostCopyDbClusterParameterGroupVersionEnum;
}
export declare class PostCopyDbClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopyDbClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostCopyDbClusterParameterGroupQueryParams;
    headers: PostCopyDbClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCopyDbClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

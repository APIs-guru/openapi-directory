import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDbClusterParameterGroupActionEnum {
    CreateDbClusterParameterGroup = "CreateDBClusterParameterGroup"
}
export declare enum PostCreateDbClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateDbClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostCreateDbClusterParameterGroupActionEnum;
    version: PostCreateDbClusterParameterGroupVersionEnum;
}
export declare class PostCreateDbClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateDbClusterParameterGroupQueryParams;
    headers: PostCreateDbClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateDbParameterGroupActionEnum {
    CreateDbParameterGroup = "CreateDBParameterGroup"
}
export declare enum PostCreateDbParameterGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostCreateDbParameterGroupQueryParams extends SpeakeasyBase {
    action: PostCreateDbParameterGroupActionEnum;
    version: PostCreateDbParameterGroupVersionEnum;
}
export declare class PostCreateDbParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateDbParameterGroupQueryParams;
    headers: PostCreateDbParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

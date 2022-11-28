import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateClusterSecurityGroupActionEnum {
    CreateClusterSecurityGroup = "CreateClusterSecurityGroup"
}
export declare enum PostCreateClusterSecurityGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateClusterSecurityGroupQueryParams extends SpeakeasyBase {
    action: PostCreateClusterSecurityGroupActionEnum;
    version: PostCreateClusterSecurityGroupVersionEnum;
}
export declare class PostCreateClusterSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateClusterSecurityGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateClusterSecurityGroupQueryParams;
    headers: PostCreateClusterSecurityGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateClusterSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

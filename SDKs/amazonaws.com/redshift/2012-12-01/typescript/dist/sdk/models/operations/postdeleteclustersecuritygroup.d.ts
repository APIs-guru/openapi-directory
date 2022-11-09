import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteClusterSecurityGroupActionEnum {
    DeleteClusterSecurityGroup = "DeleteClusterSecurityGroup"
}
export declare enum PostDeleteClusterSecurityGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteClusterSecurityGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteClusterSecurityGroupActionEnum;
    version: PostDeleteClusterSecurityGroupVersionEnum;
}
export declare class PostDeleteClusterSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteClusterSecurityGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteClusterSecurityGroupQueryParams;
    headers: PostDeleteClusterSecurityGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteClusterSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

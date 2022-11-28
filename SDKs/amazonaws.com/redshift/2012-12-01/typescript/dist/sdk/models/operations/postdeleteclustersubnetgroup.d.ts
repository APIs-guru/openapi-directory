import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteClusterSubnetGroupActionEnum {
    DeleteClusterSubnetGroup = "DeleteClusterSubnetGroup"
}
export declare enum PostDeleteClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteClusterSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteClusterSubnetGroupActionEnum;
    version: PostDeleteClusterSubnetGroupVersionEnum;
}
export declare class PostDeleteClusterSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteClusterSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteClusterSubnetGroupQueryParams;
    headers: PostDeleteClusterSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteClusterSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

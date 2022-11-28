import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateClusterSubnetGroupActionEnum {
    CreateClusterSubnetGroup = "CreateClusterSubnetGroup"
}
export declare enum PostCreateClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateClusterSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostCreateClusterSubnetGroupActionEnum;
    version: PostCreateClusterSubnetGroupVersionEnum;
}
export declare class PostCreateClusterSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateClusterSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateClusterSubnetGroupQueryParams;
    headers: PostCreateClusterSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateClusterSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

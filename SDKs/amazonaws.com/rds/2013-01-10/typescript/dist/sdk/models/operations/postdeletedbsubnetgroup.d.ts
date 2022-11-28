import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteDbSubnetGroupActionEnum {
    DeleteDbSubnetGroup = "DeleteDBSubnetGroup"
}
export declare enum PostDeleteDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostDeleteDbSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteDbSubnetGroupActionEnum;
    version: PostDeleteDbSubnetGroupVersionEnum;
}
export declare class PostDeleteDbSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbSubnetGroupQueryParams;
    headers: PostDeleteDbSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

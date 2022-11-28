import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateDbSubnetGroupActionEnum {
    CreateDbSubnetGroup = "CreateDBSubnetGroup"
}
export declare enum PostCreateDbSubnetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateDbSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostCreateDbSubnetGroupActionEnum;
    version: PostCreateDbSubnetGroupVersionEnum;
}
export declare class PostCreateDbSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateDbSubnetGroupQueryParams;
    headers: PostCreateDbSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyClusterSubnetGroupActionEnum {
    ModifyClusterSubnetGroup = "ModifyClusterSubnetGroup"
}
export declare enum PostModifyClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyClusterSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostModifyClusterSubnetGroupActionEnum;
    version: PostModifyClusterSubnetGroupVersionEnum;
}
export declare class PostModifyClusterSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClusterSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyClusterSubnetGroupQueryParams;
    headers: PostModifyClusterSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClusterSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

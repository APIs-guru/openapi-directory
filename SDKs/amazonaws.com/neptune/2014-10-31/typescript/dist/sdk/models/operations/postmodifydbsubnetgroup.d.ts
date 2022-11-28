import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyDbSubnetGroupActionEnum {
    ModifyDbSubnetGroup = "ModifyDBSubnetGroup"
}
export declare enum PostModifyDbSubnetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbSubnetGroupQueryParams extends SpeakeasyBase {
    action: PostModifyDbSubnetGroupActionEnum;
    version: PostModifyDbSubnetGroupVersionEnum;
}
export declare class PostModifyDbSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbSubnetGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyDbSubnetGroupQueryParams;
    headers: PostModifyDbSubnetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

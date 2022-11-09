import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyDbSubnetGroupActionEnum {
    ModifyDbSubnetGroup = "ModifyDBSubnetGroup"
}
export declare enum PostModifyDbSubnetGroupVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
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

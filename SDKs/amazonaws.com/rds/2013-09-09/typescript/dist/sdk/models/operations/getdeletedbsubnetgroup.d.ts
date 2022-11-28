import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbSubnetGroupActionEnum {
    DeleteDbSubnetGroup = "DeleteDBSubnetGroup"
}
export declare enum GetDeleteDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GetDeleteDbSubnetGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteDbSubnetGroupActionEnum;
    dbSubnetGroupName: string;
    version: GetDeleteDbSubnetGroupVersionEnum;
}
export declare class GetDeleteDbSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbSubnetGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbSubnetGroupQueryParams;
    headers: GetDeleteDbSubnetGroupHeaders;
}
export declare class GetDeleteDbSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

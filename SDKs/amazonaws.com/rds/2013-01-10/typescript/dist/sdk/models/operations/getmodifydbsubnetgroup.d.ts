import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyDbSubnetGroupActionEnum {
    ModifyDbSubnetGroup = "ModifyDBSubnetGroup"
}
export declare enum GetModifyDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetModifyDbSubnetGroupQueryParams extends SpeakeasyBase {
    action: GetModifyDbSubnetGroupActionEnum;
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
    version: GetModifyDbSubnetGroupVersionEnum;
}
export declare class GetModifyDbSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbSubnetGroupRequest extends SpeakeasyBase {
    queryParams: GetModifyDbSubnetGroupQueryParams;
    headers: GetModifyDbSubnetGroupHeaders;
}
export declare class GetModifyDbSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateDbSubnetGroupActionEnum {
    CreateDbSubnetGroup = "CreateDBSubnetGroup"
}
export declare enum GetCreateDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetCreateDbSubnetGroupQueryParams extends SpeakeasyBase {
    action: GetCreateDbSubnetGroupActionEnum;
    dbSubnetGroupDescription: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
    version: GetCreateDbSubnetGroupVersionEnum;
}
export declare class GetCreateDbSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDbSubnetGroupRequest extends SpeakeasyBase {
    queryParams: GetCreateDbSubnetGroupQueryParams;
    headers: GetCreateDbSubnetGroupHeaders;
}
export declare class GetCreateDbSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

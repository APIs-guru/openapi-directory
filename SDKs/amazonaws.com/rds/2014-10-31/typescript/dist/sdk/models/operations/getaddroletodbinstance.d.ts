import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAddRoleToDbInstanceActionEnum {
    AddRoleToDbInstance = "AddRoleToDBInstance"
}
export declare enum GetAddRoleToDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetAddRoleToDbInstanceQueryParams extends SpeakeasyBase {
    action: GetAddRoleToDbInstanceActionEnum;
    dbInstanceIdentifier: string;
    featureName: string;
    roleArn: string;
    version: GetAddRoleToDbInstanceVersionEnum;
}
export declare class GetAddRoleToDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAddRoleToDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetAddRoleToDbInstanceQueryParams;
    headers: GetAddRoleToDbInstanceHeaders;
}
export declare class GetAddRoleToDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

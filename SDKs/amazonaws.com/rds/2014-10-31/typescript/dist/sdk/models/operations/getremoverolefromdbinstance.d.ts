import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRemoveRoleFromDbInstanceActionEnum {
    RemoveRoleFromDbInstance = "RemoveRoleFromDBInstance"
}
export declare enum GetRemoveRoleFromDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetRemoveRoleFromDbInstanceQueryParams extends SpeakeasyBase {
    action: GetRemoveRoleFromDbInstanceActionEnum;
    dbInstanceIdentifier: string;
    featureName: string;
    roleArn: string;
    version: GetRemoveRoleFromDbInstanceVersionEnum;
}
export declare class GetRemoveRoleFromDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveRoleFromDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetRemoveRoleFromDbInstanceQueryParams;
    headers: GetRemoveRoleFromDbInstanceHeaders;
}
export declare class GetRemoveRoleFromDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

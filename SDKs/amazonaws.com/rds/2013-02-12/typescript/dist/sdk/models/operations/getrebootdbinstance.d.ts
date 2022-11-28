import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRebootDbInstanceActionEnum {
    RebootDbInstance = "RebootDBInstance"
}
export declare enum GetRebootDbInstanceVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetRebootDbInstanceQueryParams extends SpeakeasyBase {
    action: GetRebootDbInstanceActionEnum;
    dbInstanceIdentifier: string;
    forceFailover?: boolean;
    version: GetRebootDbInstanceVersionEnum;
}
export declare class GetRebootDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRebootDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetRebootDbInstanceQueryParams;
    headers: GetRebootDbInstanceHeaders;
}
export declare class GetRebootDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRebootDbInstanceActionEnum {
    RebootDbInstance = "RebootDBInstance"
}
export declare enum GetRebootDbInstanceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
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

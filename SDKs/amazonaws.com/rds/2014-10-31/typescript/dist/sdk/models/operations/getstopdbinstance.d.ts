import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStopDbInstanceActionEnum {
    StopDbInstance = "StopDBInstance"
}
export declare enum GetStopDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStopDbInstanceQueryParams extends SpeakeasyBase {
    action: GetStopDbInstanceActionEnum;
    dbInstanceIdentifier: string;
    dbSnapshotIdentifier?: string;
    version: GetStopDbInstanceVersionEnum;
}
export declare class GetStopDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStopDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetStopDbInstanceQueryParams;
    headers: GetStopDbInstanceHeaders;
}
export declare class GetStopDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbInstanceActionEnum {
    DeleteDbInstance = "DeleteDBInstance"
}
export declare enum GetDeleteDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteDbInstanceQueryParams extends SpeakeasyBase {
    action: GetDeleteDbInstanceActionEnum;
    dbInstanceIdentifier: string;
    finalDbSnapshotIdentifier?: string;
    skipFinalSnapshot?: boolean;
    version: GetDeleteDbInstanceVersionEnum;
}
export declare class GetDeleteDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbInstanceQueryParams;
    headers: GetDeleteDbInstanceHeaders;
}
export declare class GetDeleteDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

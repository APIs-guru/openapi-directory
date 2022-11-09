import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetPromoteReadReplicaActionEnum {
    PromoteReadReplica = "PromoteReadReplica"
}
export declare enum GetPromoteReadReplicaVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class GetPromoteReadReplicaQueryParams extends SpeakeasyBase {
    action: GetPromoteReadReplicaActionEnum;
    backupRetentionPeriod?: number;
    dbInstanceIdentifier: string;
    preferredBackupWindow?: string;
    version: GetPromoteReadReplicaVersionEnum;
}
export declare class GetPromoteReadReplicaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPromoteReadReplicaRequest extends SpeakeasyBase {
    queryParams: GetPromoteReadReplicaQueryParams;
    headers: GetPromoteReadReplicaHeaders;
}
export declare class GetPromoteReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

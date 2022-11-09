import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDbInstanceReadReplicaActionEnum {
    CreateDbInstanceReadReplica = "CreateDBInstanceReadReplica"
}
export declare enum PostCreateDbInstanceReadReplicaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateDbInstanceReadReplicaQueryParams extends SpeakeasyBase {
    action: PostCreateDbInstanceReadReplicaActionEnum;
    version: PostCreateDbInstanceReadReplicaVersionEnum;
}
export declare class PostCreateDbInstanceReadReplicaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbInstanceReadReplicaRequest extends SpeakeasyBase {
    queryParams: PostCreateDbInstanceReadReplicaQueryParams;
    headers: PostCreateDbInstanceReadReplicaHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbInstanceReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPromoteReadReplicaActionEnum {
    PromoteReadReplica = "PromoteReadReplica"
}
export declare enum PostPromoteReadReplicaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostPromoteReadReplicaQueryParams extends SpeakeasyBase {
    action: PostPromoteReadReplicaActionEnum;
    version: PostPromoteReadReplicaVersionEnum;
}
export declare class PostPromoteReadReplicaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPromoteReadReplicaRequest extends SpeakeasyBase {
    queryParams: PostPromoteReadReplicaQueryParams;
    headers: PostPromoteReadReplicaHeaders;
    request?: Uint8Array;
}
export declare class PostPromoteReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

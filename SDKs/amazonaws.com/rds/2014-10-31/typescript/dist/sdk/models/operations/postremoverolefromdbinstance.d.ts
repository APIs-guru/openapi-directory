import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRemoveRoleFromDbInstanceActionEnum {
    RemoveRoleFromDbInstance = "RemoveRoleFromDBInstance"
}
export declare enum PostRemoveRoleFromDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRemoveRoleFromDbInstanceQueryParams extends SpeakeasyBase {
    action: PostRemoveRoleFromDbInstanceActionEnum;
    version: PostRemoveRoleFromDbInstanceVersionEnum;
}
export declare class PostRemoveRoleFromDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveRoleFromDbInstanceRequest extends SpeakeasyBase {
    queryParams: PostRemoveRoleFromDbInstanceQueryParams;
    headers: PostRemoveRoleFromDbInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveRoleFromDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

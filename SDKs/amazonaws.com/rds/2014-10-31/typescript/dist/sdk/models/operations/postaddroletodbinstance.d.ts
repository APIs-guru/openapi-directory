import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddRoleToDbInstanceActionEnum {
    AddRoleToDbInstance = "AddRoleToDBInstance"
}
export declare enum PostAddRoleToDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostAddRoleToDbInstanceQueryParams extends SpeakeasyBase {
    action: PostAddRoleToDbInstanceActionEnum;
    version: PostAddRoleToDbInstanceVersionEnum;
}
export declare class PostAddRoleToDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddRoleToDbInstanceRequest extends SpeakeasyBase {
    queryParams: PostAddRoleToDbInstanceQueryParams;
    headers: PostAddRoleToDbInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostAddRoleToDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

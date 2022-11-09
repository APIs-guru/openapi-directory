import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRebootDbInstanceActionEnum {
    RebootDbInstance = "RebootDBInstance"
}
export declare enum PostRebootDbInstanceVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostRebootDbInstanceQueryParams extends SpeakeasyBase {
    action: PostRebootDbInstanceActionEnum;
    version: PostRebootDbInstanceVersionEnum;
}
export declare class PostRebootDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRebootDbInstanceRequest extends SpeakeasyBase {
    queryParams: PostRebootDbInstanceQueryParams;
    headers: PostRebootDbInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostRebootDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

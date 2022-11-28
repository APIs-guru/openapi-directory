import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRebootDbInstanceActionEnum {
    RebootDbInstance = "RebootDBInstance"
}
export declare enum PostRebootDbInstanceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
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

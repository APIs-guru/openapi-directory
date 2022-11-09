import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStopDbInstanceActionEnum {
    StopDbInstance = "StopDBInstance"
}
export declare enum PostStopDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStopDbInstanceQueryParams extends SpeakeasyBase {
    action: PostStopDbInstanceActionEnum;
    version: PostStopDbInstanceVersionEnum;
}
export declare class PostStopDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStopDbInstanceRequest extends SpeakeasyBase {
    queryParams: PostStopDbInstanceQueryParams;
    headers: PostStopDbInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostStopDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

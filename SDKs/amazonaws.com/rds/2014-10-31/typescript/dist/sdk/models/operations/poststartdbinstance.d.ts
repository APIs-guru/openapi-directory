import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStartDbInstanceActionEnum {
    StartDbInstance = "StartDBInstance"
}
export declare enum PostStartDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStartDbInstanceQueryParams extends SpeakeasyBase {
    action: PostStartDbInstanceActionEnum;
    version: PostStartDbInstanceVersionEnum;
}
export declare class PostStartDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartDbInstanceRequest extends SpeakeasyBase {
    queryParams: PostStartDbInstanceQueryParams;
    headers: PostStartDbInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostStartDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

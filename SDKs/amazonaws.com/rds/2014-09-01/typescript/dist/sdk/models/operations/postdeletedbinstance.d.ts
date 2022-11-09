import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDbInstanceActionEnum {
    DeleteDbInstance = "DeleteDBInstance"
}
export declare enum PostDeleteDbInstanceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDeleteDbInstanceQueryParams extends SpeakeasyBase {
    action: PostDeleteDbInstanceActionEnum;
    version: PostDeleteDbInstanceVersionEnum;
}
export declare class PostDeleteDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbInstanceRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbInstanceQueryParams;
    headers: PostDeleteDbInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

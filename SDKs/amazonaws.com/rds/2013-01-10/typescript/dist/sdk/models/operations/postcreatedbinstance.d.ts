import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDbInstanceActionEnum {
    CreateDbInstance = "CreateDBInstance"
}
export declare enum PostCreateDbInstanceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostCreateDbInstanceQueryParams extends SpeakeasyBase {
    action: PostCreateDbInstanceActionEnum;
    version: PostCreateDbInstanceVersionEnum;
}
export declare class PostCreateDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbInstanceRequest extends SpeakeasyBase {
    queryParams: PostCreateDbInstanceQueryParams;
    headers: PostCreateDbInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

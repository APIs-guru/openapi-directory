import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyDbInstanceActionEnum {
    ModifyDbInstance = "ModifyDBInstance"
}
export declare enum PostModifyDbInstanceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostModifyDbInstanceQueryParams extends SpeakeasyBase {
    action: PostModifyDbInstanceActionEnum;
    version: PostModifyDbInstanceVersionEnum;
}
export declare class PostModifyDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbInstanceRequest extends SpeakeasyBase {
    queryParams: PostModifyDbInstanceQueryParams;
    headers: PostModifyDbInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

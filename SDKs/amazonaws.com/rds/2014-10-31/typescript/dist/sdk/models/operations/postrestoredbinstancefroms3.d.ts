import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRestoreDbInstanceFromS3ActionEnum {
    RestoreDbInstanceFromS3 = "RestoreDBInstanceFromS3"
}
export declare enum PostRestoreDbInstanceFromS3VersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRestoreDbInstanceFromS3QueryParams extends SpeakeasyBase {
    action: PostRestoreDbInstanceFromS3ActionEnum;
    version: PostRestoreDbInstanceFromS3VersionEnum;
}
export declare class PostRestoreDbInstanceFromS3Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreDbInstanceFromS3Request extends SpeakeasyBase {
    queryParams: PostRestoreDbInstanceFromS3QueryParams;
    headers: PostRestoreDbInstanceFromS3Headers;
    request?: Uint8Array;
}
export declare class PostRestoreDbInstanceFromS3Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

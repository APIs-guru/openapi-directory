import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRestoreDbClusterFromS3ActionEnum {
    RestoreDbClusterFromS3 = "RestoreDBClusterFromS3"
}
export declare enum PostRestoreDbClusterFromS3VersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRestoreDbClusterFromS3QueryParams extends SpeakeasyBase {
    action: PostRestoreDbClusterFromS3ActionEnum;
    version: PostRestoreDbClusterFromS3VersionEnum;
}
export declare class PostRestoreDbClusterFromS3Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreDbClusterFromS3Request extends SpeakeasyBase {
    queryParams: PostRestoreDbClusterFromS3QueryParams;
    headers: PostRestoreDbClusterFromS3Headers;
    request?: Uint8Array;
}
export declare class PostRestoreDbClusterFromS3Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

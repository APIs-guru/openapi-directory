import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRestoreDbClusterToPointInTimeActionEnum {
    RestoreDbClusterToPointInTime = "RestoreDBClusterToPointInTime"
}
export declare enum PostRestoreDbClusterToPointInTimeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRestoreDbClusterToPointInTimeQueryParams extends SpeakeasyBase {
    action: PostRestoreDbClusterToPointInTimeActionEnum;
    version: PostRestoreDbClusterToPointInTimeVersionEnum;
}
export declare class PostRestoreDbClusterToPointInTimeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreDbClusterToPointInTimeRequest extends SpeakeasyBase {
    queryParams: PostRestoreDbClusterToPointInTimeQueryParams;
    headers: PostRestoreDbClusterToPointInTimeHeaders;
    request?: Uint8Array;
}
export declare class PostRestoreDbClusterToPointInTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

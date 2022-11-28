import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRestoreDbInstanceToPointInTimeActionEnum {
    RestoreDbInstanceToPointInTime = "RestoreDBInstanceToPointInTime"
}
export declare enum PostRestoreDbInstanceToPointInTimeVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostRestoreDbInstanceToPointInTimeQueryParams extends SpeakeasyBase {
    action: PostRestoreDbInstanceToPointInTimeActionEnum;
    version: PostRestoreDbInstanceToPointInTimeVersionEnum;
}
export declare class PostRestoreDbInstanceToPointInTimeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreDbInstanceToPointInTimeRequest extends SpeakeasyBase {
    queryParams: PostRestoreDbInstanceToPointInTimeQueryParams;
    headers: PostRestoreDbInstanceToPointInTimeHeaders;
    request?: Uint8Array;
}
export declare class PostRestoreDbInstanceToPointInTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

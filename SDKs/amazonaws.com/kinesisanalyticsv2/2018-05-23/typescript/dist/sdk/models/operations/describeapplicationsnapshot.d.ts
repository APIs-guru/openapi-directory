import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeApplicationSnapshotXAmzTargetEnum {
    KinesisAnalytics20180523DescribeApplicationSnapshot = "KinesisAnalytics_20180523.DescribeApplicationSnapshot"
}
export declare class DescribeApplicationSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationSnapshotXAmzTargetEnum;
}
export declare class DescribeApplicationSnapshotRequest extends SpeakeasyBase {
    headers: DescribeApplicationSnapshotHeaders;
    request: shared.DescribeApplicationSnapshotRequest;
}
export declare class DescribeApplicationSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    describeApplicationSnapshotResponse?: shared.DescribeApplicationSnapshotResponse;
    invalidArgumentException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}

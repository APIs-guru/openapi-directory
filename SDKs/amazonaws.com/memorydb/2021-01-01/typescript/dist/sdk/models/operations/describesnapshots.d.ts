import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeSnapshotsXAmzTargetEnum {
    AmazonMemoryDbDescribeSnapshots = "AmazonMemoryDB.DescribeSnapshots"
}
export declare class DescribeSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSnapshotsXAmzTargetEnum;
}
export declare class DescribeSnapshotsRequest extends SpeakeasyBase {
    headers: DescribeSnapshotsHeaders;
    request: shared.DescribeSnapshotsRequest;
}
export declare class DescribeSnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    describeSnapshotsResponse?: shared.DescribeSnapshotsResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    snapshotNotFoundFault?: any;
    statusCode: number;
}

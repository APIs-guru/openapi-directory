import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListApplicationSnapshotsXAmzTargetEnum {
    KinesisAnalytics20180523ListApplicationSnapshots = "KinesisAnalytics_20180523.ListApplicationSnapshots"
}
export declare class ListApplicationSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationSnapshotsXAmzTargetEnum;
}
export declare class ListApplicationSnapshotsRequest extends SpeakeasyBase {
    headers: ListApplicationSnapshotsHeaders;
    request: shared.ListApplicationSnapshotsRequest;
}
export declare class ListApplicationSnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    listApplicationSnapshotsResponse?: shared.ListApplicationSnapshotsResponse;
    statusCode: number;
    unsupportedOperationException?: any;
}

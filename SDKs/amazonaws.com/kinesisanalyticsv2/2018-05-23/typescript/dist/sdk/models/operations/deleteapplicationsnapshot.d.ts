import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationSnapshotXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationSnapshot = "KinesisAnalytics_20180523.DeleteApplicationSnapshot"
}
export declare class DeleteApplicationSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationSnapshotXAmzTargetEnum;
}
export declare class DeleteApplicationSnapshotRequest extends SpeakeasyBase {
    headers: DeleteApplicationSnapshotHeaders;
    request: shared.DeleteApplicationSnapshotRequest;
}
export declare class DeleteApplicationSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    deleteApplicationSnapshotResponse?: Map<string, any>;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}

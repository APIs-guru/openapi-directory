import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateApplicationSnapshotXAmzTargetEnum {
    KinesisAnalytics20180523CreateApplicationSnapshot = "KinesisAnalytics_20180523.CreateApplicationSnapshot"
}
export declare class CreateApplicationSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationSnapshotXAmzTargetEnum;
}
export declare class CreateApplicationSnapshotRequest extends SpeakeasyBase {
    headers: CreateApplicationSnapshotHeaders;
    request: shared.CreateApplicationSnapshotRequest;
}
export declare class CreateApplicationSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    createApplicationSnapshotResponse?: Map<string, any>;
    invalidApplicationConfigurationException?: any;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RollbackApplicationXAmzTargetEnum {
    KinesisAnalytics20180523RollbackApplication = "KinesisAnalytics_20180523.RollbackApplication"
}
export declare class RollbackApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RollbackApplicationXAmzTargetEnum;
}
export declare class RollbackApplicationRequest extends SpeakeasyBase {
    headers: RollbackApplicationHeaders;
    request: shared.RollbackApplicationRequest;
}
export declare class RollbackApplicationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    rollbackApplicationResponse?: shared.RollbackApplicationResponse;
    statusCode: number;
    unsupportedOperationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplication = "KinesisAnalytics_20150814.DeleteApplication"
}
export declare class DeleteApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationXAmzTargetEnum;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    headers: DeleteApplicationHeaders;
    request: shared.DeleteApplicationRequest;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteApplicationResponse?: Map<string, any>;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}

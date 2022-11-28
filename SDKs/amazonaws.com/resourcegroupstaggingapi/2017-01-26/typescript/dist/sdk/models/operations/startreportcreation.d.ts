import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartReportCreationXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126StartReportCreation = "ResourceGroupsTaggingAPI_20170126.StartReportCreation"
}
export declare class StartReportCreationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReportCreationXAmzTargetEnum;
}
export declare class StartReportCreationRequest extends SpeakeasyBase {
    headers: StartReportCreationHeaders;
    request: shared.StartReportCreationInput;
}
export declare class StartReportCreationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidParameterException?: any;
    startReportCreationOutput?: Map<string, any>;
    statusCode: number;
    throttledException?: any;
}

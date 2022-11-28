import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateActionXAmzTargetEnum {
    SageMakerUpdateAction = "SageMaker.UpdateAction"
}
export declare class UpdateActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateActionXAmzTargetEnum;
}
export declare class UpdateActionRequest extends SpeakeasyBase {
    headers: UpdateActionHeaders;
    request: shared.UpdateActionRequest;
}
export declare class UpdateActionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updateActionResponse?: shared.UpdateActionResponse;
}

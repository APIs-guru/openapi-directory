import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateContextXAmzTargetEnum {
    SageMakerUpdateContext = "SageMaker.UpdateContext"
}
export declare class UpdateContextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContextXAmzTargetEnum;
}
export declare class UpdateContextRequest extends SpeakeasyBase {
    headers: UpdateContextHeaders;
    request: shared.UpdateContextRequest;
}
export declare class UpdateContextResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updateContextResponse?: shared.UpdateContextResponse;
}

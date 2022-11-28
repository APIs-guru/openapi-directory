import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTrialXAmzTargetEnum {
    SageMakerUpdateTrial = "SageMaker.UpdateTrial"
}
export declare class UpdateTrialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrialXAmzTargetEnum;
}
export declare class UpdateTrialRequest extends SpeakeasyBase {
    headers: UpdateTrialHeaders;
    request: shared.UpdateTrialRequest;
}
export declare class UpdateTrialResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updateTrialResponse?: shared.UpdateTrialResponse;
}

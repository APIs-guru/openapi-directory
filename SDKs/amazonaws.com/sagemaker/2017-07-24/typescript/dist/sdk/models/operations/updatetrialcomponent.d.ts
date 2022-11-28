import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTrialComponentXAmzTargetEnum {
    SageMakerUpdateTrialComponent = "SageMaker.UpdateTrialComponent"
}
export declare class UpdateTrialComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrialComponentXAmzTargetEnum;
}
export declare class UpdateTrialComponentRequest extends SpeakeasyBase {
    headers: UpdateTrialComponentHeaders;
    request: shared.UpdateTrialComponentRequest;
}
export declare class UpdateTrialComponentResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updateTrialComponentResponse?: shared.UpdateTrialComponentResponse;
}

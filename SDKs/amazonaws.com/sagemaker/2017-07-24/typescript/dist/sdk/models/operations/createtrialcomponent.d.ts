import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTrialComponentXAmzTargetEnum {
    SageMakerCreateTrialComponent = "SageMaker.CreateTrialComponent"
}
export declare class CreateTrialComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrialComponentXAmzTargetEnum;
}
export declare class CreateTrialComponentRequest extends SpeakeasyBase {
    headers: CreateTrialComponentHeaders;
    request: shared.CreateTrialComponentRequest;
}
export declare class CreateTrialComponentResponse extends SpeakeasyBase {
    contentType: string;
    createTrialComponentResponse?: shared.CreateTrialComponentResponse;
    resourceLimitExceeded?: any;
    statusCode: number;
}

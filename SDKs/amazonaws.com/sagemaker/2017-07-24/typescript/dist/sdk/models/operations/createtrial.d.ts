import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTrialXAmzTargetEnum {
    SageMakerCreateTrial = "SageMaker.CreateTrial"
}
export declare class CreateTrialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrialXAmzTargetEnum;
}
export declare class CreateTrialRequest extends SpeakeasyBase {
    headers: CreateTrialHeaders;
    request: shared.CreateTrialRequest;
}
export declare class CreateTrialResponse extends SpeakeasyBase {
    contentType: string;
    createTrialResponse?: shared.CreateTrialResponse;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
}

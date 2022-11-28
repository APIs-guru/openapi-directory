import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateTrialComponentXAmzTargetEnum {
    SageMakerAssociateTrialComponent = "SageMaker.AssociateTrialComponent"
}
export declare class AssociateTrialComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateTrialComponentXAmzTargetEnum;
}
export declare class AssociateTrialComponentRequest extends SpeakeasyBase {
    headers: AssociateTrialComponentHeaders;
    request: shared.AssociateTrialComponentRequest;
}
export declare class AssociateTrialComponentResponse extends SpeakeasyBase {
    associateTrialComponentResponse?: shared.AssociateTrialComponentResponse;
    contentType: string;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
}

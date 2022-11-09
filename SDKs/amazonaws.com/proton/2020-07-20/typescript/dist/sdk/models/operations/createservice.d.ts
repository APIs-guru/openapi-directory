import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateServiceXAmzTargetEnum {
    AwsProton20200720CreateService = "AwsProton20200720.CreateService"
}
export declare class CreateServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceXAmzTargetEnum;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    headers: CreateServiceHeaders;
    request: shared.CreateServiceInput;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createServiceOutput?: shared.CreateServiceOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

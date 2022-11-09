import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServiceXAmzTargetEnum {
    AwsProton20200720UpdateService = "AwsProton20200720.UpdateService"
}
export declare class UpdateServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceXAmzTargetEnum;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    headers: UpdateServiceHeaders;
    request: shared.UpdateServiceInput;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateServiceOutput?: shared.UpdateServiceOutput;
    validationException?: any;
}

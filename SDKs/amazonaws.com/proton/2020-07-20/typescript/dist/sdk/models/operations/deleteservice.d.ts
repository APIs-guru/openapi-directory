import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteServiceXAmzTargetEnum {
    AwsProton20200720DeleteService = "AwsProton20200720.DeleteService"
}
export declare class DeleteServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceXAmzTargetEnum;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    headers: DeleteServiceHeaders;
    request: shared.DeleteServiceInput;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteServiceOutput?: shared.DeleteServiceOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

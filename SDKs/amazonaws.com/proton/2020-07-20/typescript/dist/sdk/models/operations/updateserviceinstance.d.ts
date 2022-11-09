import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServiceInstanceXAmzTargetEnum {
    AwsProton20200720UpdateServiceInstance = "AwsProton20200720.UpdateServiceInstance"
}
export declare class UpdateServiceInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceInstanceXAmzTargetEnum;
}
export declare class UpdateServiceInstanceRequest extends SpeakeasyBase {
    headers: UpdateServiceInstanceHeaders;
    request: shared.UpdateServiceInstanceInput;
}
export declare class UpdateServiceInstanceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateServiceInstanceOutput?: shared.UpdateServiceInstanceOutput;
    validationException?: any;
}

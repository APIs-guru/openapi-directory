import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetServiceInstanceXAmzTargetEnum {
    AwsProton20200720GetServiceInstance = "AwsProton20200720.GetServiceInstance"
}
export declare class GetServiceInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceInstanceXAmzTargetEnum;
}
export declare class GetServiceInstanceRequest extends SpeakeasyBase {
    headers: GetServiceInstanceHeaders;
    request: shared.GetServiceInstanceInput;
}
export declare class GetServiceInstanceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getServiceInstanceOutput?: shared.GetServiceInstanceOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

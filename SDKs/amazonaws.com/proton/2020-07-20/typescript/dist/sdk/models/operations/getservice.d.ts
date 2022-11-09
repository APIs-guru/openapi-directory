import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetServiceXAmzTargetEnum {
    AwsProton20200720GetService = "AwsProton20200720.GetService"
}
export declare class GetServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceXAmzTargetEnum;
}
export declare class GetServiceRequest extends SpeakeasyBase {
    headers: GetServiceHeaders;
    request: shared.GetServiceInput;
}
export declare class GetServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getServiceOutput?: shared.GetServiceOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

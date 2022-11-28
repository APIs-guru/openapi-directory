import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTerminologyXAmzTargetEnum {
    AwsShineFrontendService20170701GetTerminology = "AWSShineFrontendService_20170701.GetTerminology"
}
export declare class GetTerminologyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTerminologyXAmzTargetEnum;
}
export declare class GetTerminologyRequest extends SpeakeasyBase {
    headers: GetTerminologyHeaders;
    request: shared.GetTerminologyRequest;
}
export declare class GetTerminologyResponse extends SpeakeasyBase {
    contentType: string;
    getTerminologyResponse?: shared.GetTerminologyResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}

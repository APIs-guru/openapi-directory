import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutParameterXAmzTargetEnum {
    AmazonSsmPutParameter = "AmazonSSM.PutParameter"
}
export declare class PutParameterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutParameterXAmzTargetEnum;
}
export declare class PutParameterRequest extends SpeakeasyBase {
    headers: PutParameterHeaders;
    request: shared.PutParameterRequest;
}
export declare class PutParameterResponse extends SpeakeasyBase {
    contentType: string;
    hierarchyLevelLimitExceededException?: any;
    hierarchyTypeMismatchException?: any;
    incompatiblePolicyException?: any;
    internalServerError?: any;
    invalidAllowedPatternException?: any;
    invalidKeyId?: any;
    invalidPolicyAttributeException?: any;
    invalidPolicyTypeException?: any;
    parameterAlreadyExists?: any;
    parameterLimitExceeded?: any;
    parameterMaxVersionLimitExceeded?: any;
    parameterPatternMismatchException?: any;
    policiesLimitExceededException?: any;
    putParameterResult?: shared.PutParameterResult;
    statusCode: number;
    tooManyUpdates?: any;
    unsupportedParameterType?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetParameterXAmzTargetEnum {
    AmazonSsmGetParameter = "AmazonSSM.GetParameter"
}
export declare class GetParameterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParameterXAmzTargetEnum;
}
export declare class GetParameterRequest extends SpeakeasyBase {
    headers: GetParameterHeaders;
    request: shared.GetParameterRequest;
}
export declare class GetParameterResponse extends SpeakeasyBase {
    contentType: string;
    getParameterResult?: shared.GetParameterResult;
    internalServerError?: any;
    invalidKeyId?: any;
    parameterNotFound?: any;
    parameterVersionNotFound?: any;
    statusCode: number;
}

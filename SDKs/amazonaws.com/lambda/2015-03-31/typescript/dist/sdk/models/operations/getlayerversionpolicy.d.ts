import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetLayerVersionPolicyPathParams extends SpeakeasyBase {
    layerName: string;
    versionNumber: number;
}
export declare class GetLayerVersionPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLayerVersionPolicyRequest extends SpeakeasyBase {
    pathParams: GetLayerVersionPolicyPathParams;
    headers: GetLayerVersionPolicyHeaders;
}
export declare class GetLayerVersionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getLayerVersionPolicyResponse?: shared.GetLayerVersionPolicyResponse;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLayerVersionPathParams extends SpeakeasyBase {
    layerName: string;
    versionNumber: number;
}
export declare class GetLayerVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLayerVersionRequest extends SpeakeasyBase {
    pathParams: GetLayerVersionPathParams;
    headers: GetLayerVersionHeaders;
}
export declare class GetLayerVersionResponse extends SpeakeasyBase {
    contentType: string;
    getLayerVersionResponse?: shared.GetLayerVersionResponse;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}

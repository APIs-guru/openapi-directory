import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetLayerVersionByArnFindEnum {
    LayerVersion = "LayerVersion"
}
export declare class GetLayerVersionByArnQueryParams extends SpeakeasyBase {
    arn: string;
    find: GetLayerVersionByArnFindEnum;
}
export declare class GetLayerVersionByArnHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLayerVersionByArnRequest extends SpeakeasyBase {
    queryParams: GetLayerVersionByArnQueryParams;
    headers: GetLayerVersionByArnHeaders;
}
export declare class GetLayerVersionByArnResponse extends SpeakeasyBase {
    contentType: string;
    getLayerVersionResponse?: shared.GetLayerVersionResponse;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}

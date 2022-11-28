import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMapStyleDescriptorPathParams extends SpeakeasyBase {
    mapName: string;
}
export declare class GetMapStyleDescriptorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMapStyleDescriptorRequest extends SpeakeasyBase {
    pathParams: GetMapStyleDescriptorPathParams;
    headers: GetMapStyleDescriptorHeaders;
}
export declare class GetMapStyleDescriptorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getMapStyleDescriptorResponse?: shared.GetMapStyleDescriptorResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

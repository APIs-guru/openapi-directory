import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMapSpritesPathParams extends SpeakeasyBase {
    fileName: string;
    mapName: string;
}
export declare class GetMapSpritesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMapSpritesRequest extends SpeakeasyBase {
    pathParams: GetMapSpritesPathParams;
    headers: GetMapSpritesHeaders;
}
export declare class GetMapSpritesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getMapSpritesResponse?: shared.GetMapSpritesResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

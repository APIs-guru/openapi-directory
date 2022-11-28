import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMapTilePathParams extends SpeakeasyBase {
    mapName: string;
    x: string;
    y: string;
    z: string;
}
export declare class GetMapTileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMapTileRequest extends SpeakeasyBase {
    pathParams: GetMapTilePathParams;
    headers: GetMapTileHeaders;
}
export declare class GetMapTileResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getMapTileResponse?: shared.GetMapTileResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

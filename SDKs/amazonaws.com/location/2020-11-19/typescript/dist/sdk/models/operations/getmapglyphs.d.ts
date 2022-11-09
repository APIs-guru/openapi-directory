import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMapGlyphsPathParams extends SpeakeasyBase {
    fontStack: string;
    fontUnicodeRange: string;
    mapName: string;
}
export declare class GetMapGlyphsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMapGlyphsRequest extends SpeakeasyBase {
    pathParams: GetMapGlyphsPathParams;
    headers: GetMapGlyphsHeaders;
}
export declare class GetMapGlyphsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getMapGlyphsResponse?: shared.GetMapGlyphsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

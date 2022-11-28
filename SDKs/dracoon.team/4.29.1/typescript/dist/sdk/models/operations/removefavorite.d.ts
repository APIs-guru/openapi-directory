import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveFavoritePathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class RemoveFavoriteHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveFavoriteRequest extends SpeakeasyBase {
    pathParams: RemoveFavoritePathParams;
    headers: RemoveFavoriteHeaders;
}
export declare class RemoveFavoriteResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}

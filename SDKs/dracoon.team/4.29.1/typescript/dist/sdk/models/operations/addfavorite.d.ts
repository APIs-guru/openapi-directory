import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFavoritePathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class AddFavoriteHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class AddFavoriteRequest extends SpeakeasyBase {
    pathParams: AddFavoritePathParams;
    headers: AddFavoriteHeaders;
}
export declare class AddFavoriteResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}

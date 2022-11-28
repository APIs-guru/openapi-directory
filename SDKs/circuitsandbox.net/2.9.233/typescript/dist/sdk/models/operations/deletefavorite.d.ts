import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFavoritePathParams extends SpeakeasyBase {
    convId: string;
}
export declare class DeleteFavoriteSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class DeleteFavoriteRequest extends SpeakeasyBase {
    pathParams: DeleteFavoritePathParams;
    security: DeleteFavoriteSecurity;
}
export declare class DeleteFavoriteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

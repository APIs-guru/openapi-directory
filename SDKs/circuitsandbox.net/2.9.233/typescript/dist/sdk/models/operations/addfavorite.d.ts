import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFavoritePathParams extends SpeakeasyBase {
    convId: string;
}
export declare class AddFavoriteSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddFavoriteRequest extends SpeakeasyBase {
    pathParams: AddFavoritePathParams;
    security: AddFavoriteSecurity;
}
export declare class AddFavoriteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LikeSpaceItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class LikeSpaceItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class LikeSpaceItemRequest extends SpeakeasyBase {
    pathParams: LikeSpaceItemPathParams;
    security: LikeSpaceItemSecurity;
}
export declare class LikeSpaceItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

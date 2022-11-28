import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LikeItemPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class LikeItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class LikeItemRequest extends SpeakeasyBase {
    pathParams: LikeItemPathParams;
    security: LikeItemSecurity;
}
export declare class LikeItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

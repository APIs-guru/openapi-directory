import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnlikeSpaceItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class UnlikeSpaceItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnlikeSpaceItemRequest extends SpeakeasyBase {
    pathParams: UnlikeSpaceItemPathParams;
    security: UnlikeSpaceItemSecurity;
}
export declare class UnlikeSpaceItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

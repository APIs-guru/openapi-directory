import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnlikeItemPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class UnlikeItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnlikeItemRequest extends SpeakeasyBase {
    pathParams: UnlikeItemPathParams;
    security: UnlikeItemSecurity;
}
export declare class UnlikeItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

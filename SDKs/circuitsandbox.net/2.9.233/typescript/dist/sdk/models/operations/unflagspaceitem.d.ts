import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnflagSpaceItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class UnflagSpaceItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnflagSpaceItemRequest extends SpeakeasyBase {
    pathParams: UnflagSpaceItemPathParams;
    security: UnflagSpaceItemSecurity;
}
export declare class UnflagSpaceItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

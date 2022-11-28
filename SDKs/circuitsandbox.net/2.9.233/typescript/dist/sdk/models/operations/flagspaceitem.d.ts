import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FlagSpaceItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class FlagSpaceItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class FlagSpaceItemRequest extends SpeakeasyBase {
    pathParams: FlagSpaceItemPathParams;
    security: FlagSpaceItemSecurity;
}
export declare class FlagSpaceItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

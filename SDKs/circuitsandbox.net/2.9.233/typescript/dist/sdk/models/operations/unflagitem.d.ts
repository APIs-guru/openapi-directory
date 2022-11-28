import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnFlagItemPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class UnFlagItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnFlagItemRequest extends SpeakeasyBase {
    pathParams: UnFlagItemPathParams;
    security: UnFlagItemSecurity;
}
export declare class UnFlagItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

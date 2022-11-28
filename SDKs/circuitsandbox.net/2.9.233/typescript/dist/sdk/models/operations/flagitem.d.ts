import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FlagItemPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class FlagItemRequestBody extends SpeakeasyBase {
    itemCreationTime?: string;
    parentId?: string;
}
export declare class FlagItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class FlagItemRequest extends SpeakeasyBase {
    pathParams: FlagItemPathParams;
    request?: FlagItemRequestBody;
    security: FlagItemSecurity;
}
export declare class FlagItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

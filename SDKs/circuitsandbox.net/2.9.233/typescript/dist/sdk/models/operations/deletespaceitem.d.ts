import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSpaceItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class DeleteSpaceItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class DeleteSpaceItemRequest extends SpeakeasyBase {
    pathParams: DeleteSpaceItemPathParams;
    security: DeleteSpaceItemSecurity;
}
export declare class DeleteSpaceItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

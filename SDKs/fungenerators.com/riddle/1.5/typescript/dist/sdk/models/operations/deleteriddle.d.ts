import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteRiddleQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteRiddleSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class DeleteRiddleRequest extends SpeakeasyBase {
    queryParams: DeleteRiddleQueryParams;
    security: DeleteRiddleSecurity;
}
export declare class DeleteRiddleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

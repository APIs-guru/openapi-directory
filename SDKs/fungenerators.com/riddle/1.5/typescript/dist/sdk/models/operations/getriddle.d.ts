import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRiddleQueryParams extends SpeakeasyBase {
    id?: string;
}
export declare class GetRiddleSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetRiddleRequest extends SpeakeasyBase {
    queryParams: GetRiddleQueryParams;
    security: GetRiddleSecurity;
}
export declare class GetRiddleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
